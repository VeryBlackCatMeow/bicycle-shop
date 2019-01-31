import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsAction, addToCartAction, setFilterAction } from '../actions/index.js'
import ProductCard from '../components/ProductCard';
import { Row, Col, Button, Spinner } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class Showcase extends Component {
    
    constructor(props) {
        super(props);
      
    } 

    componentDidMount = () => {
        const { setBikesFunc, extraProps } = this.props;
        axios.get(/*'/database/bikesdatabase.json'*/extraProps.link).then(({ data }) => {    
        setBikesFunc(data);      
        });
    }

    render() { 
        const { items, addToCartFunc, itemCount, extraProps } = this.props;
        return (
    <Row>
         {
            !items.length
            ? <Spinner size="sm" color="primary">LOADING &nbsp;</Spinner>
            : items.map( (item, id) => (<ProductCard key={id} {...item} 
                    extraProps={extraProps} addToCartFunc={addToCartFunc} itemCount={itemCount}/>))
            // this.filteringBy(items, "type", filterBy).map( (item, id) => (<ProductCard key={id} {...item}/>))
        }
    </Row>
        );
    }
}


const sortingBy = (items, sortBy) => {
    switch(sortBy) {
        case 'high':
            return items.slice().sort( (a , b) => {      //or concat()
                    if (a.price < b.price) return 1;
                    if (a.price > b.price) return -1;
            });
        case 'low':
            return items.slice().sort( (a , b) => {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
            });
        case 'name':
            return items.slice().sort( (a , b) => {
                    if (a.title > b.title) return 1;
                    if (a.title < b.title) return -1;
            });
        default:
            return items;        
    }
};

const searchingBy = (items, searchBy) => {
    return items.filter( s=>
        s.product.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        s.type.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        s.brand.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0    
    );
}

const finalFiltration = (items, searchBy, sortBy) =>  {
    return sortingBy(searchingBy(items, searchBy), sortBy)
};

const mapStateToProps = ( 
    {productreducers, filtersreducers, cartreducers}) => ({
    items: finalFiltration(productreducers.items, filtersreducers.searchBy, filtersreducers.sortBy),
    itemCount: cartreducers.items.reduce( (count, item) => 
                            count + (item.id === cartreducers.lastItem.id ? 1 : 0), 0),
    lastItem: cartreducers.lastItem,



    filterBy: filtersreducers.filterBy,

});

const mapDispatchToProps = (dispatch) => ({
    setBikesFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),



    setFilterFunc: filter => dispatch(setFilterAction(filter)),
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase));