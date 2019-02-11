import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { Row } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class Showcase extends Component {

    componentDidMount = () => {
        const { setProductsFunc} = this.props;
    
        axios.get(`/database/${this.props.match.params.product}.json`).then(({ data }) => {    
            setProductsFunc(data);      
        });
    }

    render() { 
        const { items, cartItems, addToCartFunc, removeFromCartFunc, itemCount, extraProps } = this.props;
        return (
    <Row>
        {
          !items.length
          ? <Loading/>
        : items.map( (item) => (<ProductCard key={item.id/*.toString()*/} {...item} 
                    extraProps={extraProps} cartItems={cartItems}
                    addToCartFunc={addToCartFunc} removeFromCartFunc={removeFromCartFunc }
                    itemCount={itemCount}/>))
            // this.filteringBy(items, "type", filterBy).map( (item, id) => (<ProductCard key={id} {...item}/>))
        }
    </Row>
        );
    }
}


export const sortingBy = (items, sortBy) => {
    switch(sortBy) {
        case 'high':
            return items.slice().sort( (a , b) => {      //slice or concat()
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
    return items.filter( item=>
        item.product.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.type.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 ||
        item.brand.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0    
    );
}

const filteringBy = (items, filterBy) => {
    if(filterBy.length === 0) return items;
    else return items.filter(item => {
        for( let i = 0; i < filterBy.length; i++) {
            if(item[filterBy[i].filterName].indexOf(filterBy[i].value) >= 0) return true
        }
    });
}

const finalFiltration = (items, searchBy, sortBy) =>  {
    return sortingBy(searchingBy(items, searchBy), sortBy)
};

const mapStateToProps = ( 
    {productreducers, filtersreducers, cartreducers}) => ({
    //items: finalFiltration(productreducers.items, filtersreducers.searchBy, filtersreducers.sortBy),
    items: filteringBy(productreducers.items, filtersreducers.filterBy),
    itemCount: cartreducers.items.reduce( (count, item) => 
                            count + (item.id === cartreducers.lastItem.id ? 1 : 0), 0),
    lastItem: cartreducers.lastItem,
    
    cartItems: cartreducers.items,

});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Showcase));