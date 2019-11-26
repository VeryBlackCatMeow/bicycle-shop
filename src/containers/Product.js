import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {  setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import Loading from '../components/Loading';
import ProductPage from '../components/ProductPage';
import '../styles/product.scss';

const Product = (props) => {
    const { setProductsFunc } = props;
    
    useEffect(() => {
        axios.get(`/database/${props.match.params.category}.json`)
            .then(({ data }) => {    
                setProductsFunc(data);      
            })
            .catch(error => console.log(error));
    }, [props.match.params.category, setProductsFunc]);

    const {cartItems, addToCartFunc, removeFromCartFunc, items} = props;
    const item = items.find( i => i.id === +(props.match.params.id));
           
    return  item
            ?
            <ProductPage
                item={item}
                cartItems={cartItems}
                addToCartFunc={addToCartFunc}
                removeFromCartFunc={removeFromCartFunc}
            />
            :
            <Loading/>
    
}

const mapStateToProps = ( {cartreducers, productreducers} ) => ({
    items: productreducers.items,
    cartItems: cartreducers.items,
});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);