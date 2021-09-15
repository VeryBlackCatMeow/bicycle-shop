import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {Row, Col, Pagination, PaginationItem, PaginationLink, Input, Label } from 'reactstrap';

import { setProductsAction, addToCartAction,
        removeFromCartAction, setAllProductsAction,
        setCurrentPageAction, setItemsPerPageAction } from '../actions/index.js'
import ProductCard from '../components/ProductCard';
import { searchItems } from '../containers/Search';
import '../styles/productCard.scss';

class Showcase extends Component {
    componentDidMount = () => {
        this.getProducts();
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params !== prevProps.match.params) {
            this.getProducts();
            this.props.setCurrentPageFunc(1);
        }
        if (this.props.itemsPerPage !== prevProps.itemsPerPage) {
            this.props.setCurrentPageFunc(1);
        }
    }
    
    getProducts = () => {
        const { category, query } = this.props.match.params;
        const setProductsFunc = this.props.setProductsFunc;

        const links = ['/bicycles', '/rental', '/components', '/tools', '/apparel',
                        '/accessories', '/backpacks', '/news', '/sale'];
        const requests = links.map( link => axios.get(`/database${link}.json`) );

        query || category === 'allItems'
        ?
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
                query
                ?
                setProductsFunc( searchItems(allItems, query) )
                :
                setProductsFunc(allItems)
            })
            .catch(error => console.log(error))
        :    
        axios.get(`/database/${category}.json`)
            .then(({ data }) => {    
                setProductsFunc(data);   
            })
            .catch(error => console.log(error));
    }

    handleClick = (event) => {
        if(event.target.id === '...') return;
        this.props.setCurrentPageFunc(Number(event.target.id));  
    }

    handleInput = (event) => {
        this.props.setItemsPerPageFunc(Number(event.target.value));
    }

    setPageNumbers = (currentPage, lastPage) => {
        var delta = 2,
            range = [],
            rangeWithDots = [],
            l;
    
        range.push(1);  
    
        if (lastPage <= 1){
         return range;
        }
    
        for (let i = currentPage - delta; i <= currentPage + delta; i++) {
            if (i < lastPage && i > 1) {
                range.push(i);
            }
        }  
        range.push(lastPage);
    
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
    
        return rangeWithDots;
    }

    render() { 
        const {items, cartItems, addToCartFunc, removeFromCartFunc, currentPage, itemsPerPage} = this.props;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);
        
        // Logic for displaying page numbers (all pages)
        // const pageNumbers = [];
        // for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        //     pageNumbers.push(i);
        // }

        // Logic for displaying page numbers (with dots)
        const lastPage = Math.ceil(items.length / itemsPerPage);
        const pageNumbers = this.setPageNumbers(currentPage, lastPage);

        return( 
            !items.length
            ? 
            <h5>No products found. Please change your search filters and try again.</h5>
            : 
            <>
            <Col>
                <Row>         
                    {             /* Displaying items */
                    currentitems.map( item => (<ProductCard key={item.id}
                                {...item} 
                                cartItems={cartItems}
                                addToCartFunc={addToCartFunc} 
                                removeFromCartFunc={removeFromCartFunc }/>))
                    }
                </Row> 
                <Row>   {     /*Choosing quantity of itemsPerPage */           }
                    <Label sm={1.5} size="sm">Show: &nbsp;</Label>
                    <Col sm={1.5}>
                        <Input type="select" bsSize="sm" value={itemsPerPage} onChange={this.handleInput}>
                            <option value='6'>6</option>
                            <option value='9'>9</option>
                            <option value='12'>12</option>
                        </Input>
                    </Col>
                    <Col sm={3}>
                    </Col>
                    <Col sm={6}>
                        <Pagination size="sm" mx-auto="true">
                            {         /* Displaying page numbers */
                            pageNumbers.map( (number, index) => (
                                <PaginationItem key={index} active={currentPage === number}>
                                    <PaginationLink id={number} onClick={this.handleClick}>
                                        {number}
                                    </PaginationLink>
                                </PaginationItem>
                            ))
                            }
                        </Pagination>
                    </Col>
                </Row>
            </Col>
            </>
        )
    }
}

const sortItems = (items, sortBy) => {
    switch(sortBy) {
        case 'high':   //slice or concat()
            return items.slice().sort( (a , b) => b.price - a.price);
        case 'low':
            return items.slice().sort( (a , b) => a.price - b.price);
        case 'name':
            return items.slice().sort( (a , b) => {
                if (a.title >= b.title) return 1;
                else return -1;
            });
        default:
            return items;        
    }
};

const filterItems = (items, filterBy) => {
    for ( let filter in filterBy) {
        if (filterBy[filter].length !== 0) { 
            items = items.filter(item => {
                for( let value in filterBy[filter]) {
                    if(item[filter].indexOf(filterBy[filter][value]) !== -1) return true;
                } 
                return false;
            });
        }
    }
    return items;
}

const finalFilter = (items, sortBy, filterBy) =>  {
    return sortItems(filterItems(items, filterBy), sortBy)
};

const mapStateToProps = ( 
    {productreducers, filtersreducers, cartreducers, paginationreducers}) => ({
    items: finalFilter(productreducers.items,
                            filtersreducers.sortBy, filtersreducers.filterBy),
    cartItems: cartreducers.items,
    allItems: productreducers.allItems,
    currentPage: paginationreducers.currentPage,
    itemsPerPage: paginationreducers.itemsPerPage
});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
    setALLProductsFunc: allItems => dispatch(setAllProductsAction(allItems)),
    setCurrentPageFunc: currentPage => dispatch(setCurrentPageAction(currentPage)),
    setItemsPerPageFunc: itemsPerPage => dispatch(setItemsPerPageAction(itemsPerPage))
    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase));