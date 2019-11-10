import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Link, withRouter  } from 'react-router-dom';
import { InputGroup, InputGroupAddon, Input,} from 'reactstrap';

import { setAllProductsAction, searchQueryAction } from '../actions/index.js'
import '../styles/search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        };
        this.searchInput = React.createRef();   //managing focus
    }
    
    componentDidMount = () => {
        let links = ['/bicycles', '/rental', '/components', '/tools', '/apparel', '/accessories', '/backpacks', '/news', '/sale'];
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

    submitFunc = (e) => {
        if (e.key === 'Enter') {
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
        return  <>
                    <div className="head-search">
                        <InputGroup  className="align-items-center">
                            <InputGroupAddon addonType="prepend">
                                <i className='fas fa-search'></i>
                            </InputGroupAddon>
                            <Input value={searchQuery}
                                    onChange={e => searchFunc(e.target.value)}
                                    onFocus={ this.onFocus }
                                    onBlur={ this.onBlur }
                                    onKeyDown={this.submitFunc}
                                    innerRef={this.searchInput}
                                    />
                        </InputGroup>
                    </div>
                    <ul className="head-search-list" style={{display: this.state.visible && searchQuery? 'table':'none'}}>
                    {   
                        allItems.slice(0, 10).map(item => (
                            <li key={item.id} className="search-list-item">
                                <Link to={`/gallery/${item.category}/${item.id}`} >
                                    { this.highlightText(searchQuery, item.type, item.product, item.title) }
                                </Link>
                            </li>))                       
                    }
                    {
                        !allItems.length
                        ?
                        <h6>Sorry, No Matches Found :-(</h6>
                        :
                        null
                    }
                    </ul> 
                </>
        }
    
}

export const searchItems = (allItems, searchQuery) => {
    return allItems.filter( item =>
        item.type.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        item.product.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||    
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
