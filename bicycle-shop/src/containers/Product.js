import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container } from 'reactstrap';

import {  setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import Loading from '../components/Loading';
import ProductTop from '../components/ProductTop';
import ProductBar from '../components/ProductBar';
import '../styles/product.css'

const Product = (props) => {
    const { setProductsFunc } = props;
    
    useEffect(() => {
        axios.get(`/database/${props.match.params.category}.json`).then(({ data }) => {    
            setProductsFunc(data);      
        });
    });

    const {cartItems, addToCartFunc, removeFromCartFunc, items} = props;
    const item = items.find( i => i.id === +(props.match.params.id));
           
    return  item
            ?
            <Container className="product">
                <h1>{item.product} {item.title}</h1>
                <ProductTop item={item}
                            cartItems={cartItems}
                            addToCartFunc={addToCartFunc}
                            removeFromCartFunc={removeFromCartFunc}/>
                <ProductBar {...item}/>
            </Container>
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