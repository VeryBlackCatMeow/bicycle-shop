import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { unique, createCookie, getCookie  } from '../funcLibrary/index.js';
import { addToCartAction, removeFromCartAction, decreaseAction, addAllItemsAction} from '../actions/index.js';
import DropCart  from '../components/DropCart';
import CartPage from '../components/CartPage';
import '../styles/cart.scss';

const Cart = (
    {totalPrice, totalCount, cartItems, items, addToCartFunc,removeFromCartFunc, 
        quantity, decreaseFunc, addAllItemsFunc, match}) => {
    
    useEffect(()=>{
        const cookie = JSON.parse(getCookie('cart'));
        if(cookie) addAllItemsFunc(cookie);
    }, [addAllItemsFunc])        

    useEffect(()=> {
        createCookie('cart', JSON.stringify( {items: items, quantity: quantity} ));
        if(cartItems.length === 0)  createCookie('cart', JSON.stringify( {items: [], quantity: {} }));
        }, [items, quantity,cartItems])
 
    return(
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
}

const mapStateToProps = ( { cartreducers, userreducers } ) => ({
    totalPrice: cartreducers.items.reduce( (total, item) => 
                        ((total*100 + item.price*100) /100).toFixed(2), 0),
    totalCount: cartreducers.items.length,
    items: cartreducers.items,
    cartItems: unique(cartreducers.items),
    quantity: cartreducers.quantity,
    isLoggedIn: userreducers.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
    decreaseFunc: id => dispatch(decreaseAction(id)),
    addAllItemsFunc: obj => dispatch(addAllItemsAction(obj))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));