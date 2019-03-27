import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import { addToCartAction, removeFromCartAction, decreaseAction } from '../actions/index.js'
import CartItem from '../components/CartItem.js'

const Cart = ({totalPrice, totalCount, cartItems, addToCartFunc, removeFromCartFunc, quantity, setQuantityFunc, decreaseFunc}) => {

    return  !cartItems.length 
            ?
            <Container>
                <div>Shoping Cart</div>
                <div>Your Cart Is Empty :(</div>
            </Container>
            :
            <Container>
                <div>Shoping Cart</div>
                <div>
                    <ListGroup>
                        {             
                        cartItems.map( (item) => (<CartItem key={item.id} item={item} 
                                removeFromCartFunc={removeFromCartFunc} addToCartFunc={addToCartFunc} 
                                setQuantityFunc={setQuantityFunc} quantity={quantity}
                                decreaseFunc={decreaseFunc} />))
                        }
                    </ListGroup>
                </div>
                <div> Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</div>
                <div>
                    <Link to="/checkout">
                    <Button size="sm" color="primary" style={{ float: 'right'}}>Proceed To Checkout</Button>
                    </Link>
                </div>
            </Container>
}

const unique = (array) => {
    var newArr = [];
    array.filter( item => {
        var i = newArr.findIndex(x => (x.id === item.id));
        if(i <= -1){
        newArr.push({...item});
        }
    return null;
    })
    return newArr
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