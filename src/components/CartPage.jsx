import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, ListGroup } from 'reactstrap';

import CartItem from '../components/CartItem'
import '../styles/cart.scss';

const CartPage = (
    {totalPrice, totalCount, cartItems, addToCartFunc, removeFromCartFunc, quantity, decreaseFunc}) => (

    !cartItems.length 
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
                cartItems.map( (item) => (
                    <CartItem key={item.id}
                            item={item} 
                            addToCartFunc={addToCartFunc}
                            removeFromCartFunc={removeFromCartFunc} 
                            decreaseFunc={decreaseFunc} 
                            quantity={quantity} />)
                )
            }
        </ListGroup>
        <h3> Subtotal: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</h3>
        <div className="cart-bottom">
            <Link to="/checkout">
                <Button disabled size="sm" color="primary">Proceed To Checkout</Button>
            </Link>
        </div>
    </Container>
);

export default CartPage