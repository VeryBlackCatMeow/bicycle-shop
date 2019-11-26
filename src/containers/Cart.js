import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { unique } from '../funcLibrary/index.js';
import { addToCartAction, removeFromCartAction, decreaseAction } from '../actions/index.js';
import DropCart  from '../components/DropCart';
import CartPage from '../components/CartPage';
import '../styles/cart.scss';

const Cart = (
    {totalPrice, totalCount, cartItems, addToCartFunc,removeFromCartFunc, quantity, decreaseFunc, match}) => (

    match.path==='/cart'
    ? 
    <CartPage
        totalPrice={totalPrice}
        totalCount={totalCount}
        cartItems={cartItems}
        addToCartFunc={addToCartFunc}
        removeFromCartFunc={removeFromCartFunc}
        quantity={quantity}
        decreaseFunc={decreaseFunc}
    />
    :
    <DropCart
        totalPrice={totalPrice}
        totalCount={totalCount}
        cartItems={cartItems}
        removeFromCartFunc={removeFromCartFunc}
    />
);

const mapStateToProps = ( { cartreducers } ) => ({
    totalPrice: cartreducers.items.reduce( (total, item) => 
                        ((total*100 + item.price*100) /100).toFixed(2), 0),
    totalCount: cartreducers.items.length,
    cartItems: unique(cartreducers.items),
    quantity: cartreducers.quantity,
});

const mapDispatchToProps = (dispatch) => ({
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
    decreaseFunc: id => dispatch(decreaseAction(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));