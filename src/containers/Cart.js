import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button, ListGroup } from 'reactstrap';

import { unique } from '../funcLibrary/index.js'
import { addToCartAction, removeFromCartAction, decreaseAction } from '../actions/index.js'
import CartItem from '../components/CartItem'
import '../styles/cart.css';

const Cart = ({totalPrice, totalCount, cartItems, addToCartFunc, removeFromCartFunc, quantity, setQuantityFunc, decreaseFunc}) => {

    return  !cartItems.length 
            ?
            <Container className="cart">
                <h2>Shoping Cart</h2><hr/><br/><br/>
                <h5>Your Cart Is Empty :(</h5>
            </Container>
            :
            <Container className="cart">
                <h2>Shoping Cart</h2>
                <ListGroup>
                    {             
                    cartItems.map( (item) => (<CartItem key={item.id} item={item} 
                            removeFromCartFunc={removeFromCartFunc} addToCartFunc={addToCartFunc} 
                            decreaseFunc={decreaseFunc} 
                            quantity={quantity} />))
                    }
                </ListGroup>
                <h3> Subtotal: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</h3>
                <Link to="/checkout">
                    <Button disabled size="sm" color="primary">Proceed To Checkout</Button>
                </Link>
            </Container>
}

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


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

//<Input type="text" value={quantity[item.id]} name={item.id} onChange={e => setQuantityFunc(e.target)} />