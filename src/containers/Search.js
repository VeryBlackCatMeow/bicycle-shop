import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input,
    Nav, NavItem} from 'reactstrap';

import { setAllProductsAction, searchQueryAction } from '../actions/index.js'
import Loading from '../components/Loading';
import '../styles/productCard.css';

class Search extends Component {
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
                                    onChange={e => searchFunc(e.target.value)}/>
                        </InputGroup>
                    </div>
                    <div className="head-search-list">
                    {   
                    searchQuery
                    ?
                    allItems.slice(0, 10).map(item => (
                        <h6 key={item.id}>
                            <a href="/#">{ this.highlightText(searchQuery, item.type, item.product, item.title) }</a><br/>
                        </h6>))                        
                    :
                    null
                    }
                    </div> 
                </>
        }
    
}

const searchAllItems = (allItems, searchQuery) => {
    return allItems.filter( item =>
        item.type.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        item.product.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||    
        item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
}


const mapStateToProps = ({productreducers, searchreducers}) => ({
    allItems: searchAllItems(productreducers.allItems, searchreducers.searchQuery),
    searchQuery: searchreducers.searchQuery
})

const mapDispatchToProps = dispatch => ({
    setALLProductsFunc: allItems => dispatch(setAllProductsAction(allItems)),
    searchFunc: searchQuery => dispatch(searchQueryAction(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
