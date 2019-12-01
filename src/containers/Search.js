import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';

import { setAllProductsAction, searchQueryAction } from '../actions/index.js'
import SearchForm from '../components/SearchForm'
import '../styles/search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
        this.searchInput = React.createRef();   //managing focus
    }
    
    componentDidMount = () => {
        let links = ['/bicycles', '/rental', '/components', '/tools', '/apparel',
                    '/accessories', '/backpacks', '/news', '/sale'];
        let requests = links.map( link => axios.get(`/database${link}.json`) );

        Promise.allSettled(requests)
            .then( responses => {
                let allItems = [];
                for(let response of responses) {
                    if(response.status === "fulfilled") {
                        allItems = [...allItems, ...response.value.data]
                    }
                    if(response.status === "rejected") { 
                        console.log(response.reason)
                    }
                }
                return this.props.setALLProductsFunc(allItems)
            })
            .catch(error => console.log(error));
    }

    onFocus = () => {
        this.setState({
            visible : true
        });
    }

    onBlur = () => {
        setTimeout(() => {
            this.setState({
                visible : false
            });
        }, 200);
    }

    onSubmit = (e) => {
        if (e.key === 'Enter' && this.props.searchQuery) {
            this.props.history.push(`/search/${this.props.searchQuery}`);
            this.searchInput.current.blur();
            this.props.searchFunc('');
          }
    }

    highlightText = (query, ...texts) => {
        let text = [...texts].join(' '); 
        let parts = text.split(new RegExp(`(${query})`, 'gi'));
        return <span> { parts.map((part, i) => 
            <span key={i} style={part.toLowerCase() === query.toLowerCase() ? { color: 'red' } : {} }>
                { part }
            </span>)
        } </span>;
    }

    render() {
        const { allItems, searchQuery, searchFunc } = this.props;
        return  <SearchForm
                    allItems={allItems}
                    //search setup:
                    searchQuery={searchQuery}
                    searchFunc={searchFunc}
                    //ref to input:
                    searchInput={this.searchInput}
                    //input listeners:
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSubmit={this.onSubmit}
                    //droplist:
                    visible={this.state.visible}                      
                    highlightText={this.highlightText}
                />
        }
}

export const searchItems = (allItems, searchQuery) => {
    return allItems.filter( item =>
        item.type.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        item.product.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        item.brand.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||  
        item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
}

const mapStateToProps = ({productreducers, searchreducers}) => ({
    allItems: searchItems(productreducers.allItems, searchreducers.searchQuery),
    searchQuery: searchreducers.searchQuery
})

const mapDispatchToProps = dispatch => ({
    setALLProductsFunc: allItems => dispatch(setAllProductsAction(allItems)),
    searchFunc: searchQuery => dispatch(searchQueryAction(searchQuery))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
