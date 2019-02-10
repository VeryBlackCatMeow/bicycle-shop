import React from 'react';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/index.js'
import {NavItem, NavLink,
         UncontrolledPopover, PopoverHeader, PopoverBody, 
         Button,
         ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const DropCart = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => (
    <NavItem id="PopoverLegacy">
        <NavLink href="#"> Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</NavLink>
            <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                <PopoverHeader>Shoping Cart</PopoverHeader>
                <PopoverBody>
                    <ListGroup>
                        { 
                            !cartItems.length
                            ? 'Your Cart Is Empty :('
                            : cartItems.map( (item) => (<DropCartItem key={item.id} {...item} removeFromCartFunc={removeFromCartFunc}/>))
                        }
                    </ListGroup>
                </PopoverBody>
                <PopoverHeader>
                    <Link to="/cart">
                        <Button size="sm" color="primary" >View Cart</Button>
                    </Link>
                    <Button size="sm" color="primary" style={{ float: 'right'}}>Proceed To Checkout</Button>
                </PopoverHeader>

            </UncontrolledPopover>
    </NavItem>
);

const DropCartItem = ({id, image, title, price, removeFromCartFunc}) => (
    <ListGroupItem>
         <img src={image} className="rounded-circle img-fluid w-25" alt="Cart Item Image"/>
        <span>{title}</span> &nbsp; 
        <span>{price}</span> &nbsp; 
        <Button size="sm" color="danger" close onClick={removeFromCartFunc.bind(this, id)}/>
    </ListGroupItem>
);

const unique = (array) => {
    var newArr = [];
    array.filter( item => {
        var i = newArr.findIndex(x => (x.id == item.id));
        if(i <= -1){
        newArr.push({...item});
        }
    return null;
    })
    return newArr
}

const mapStateToProps = ( { cartreducers }) => ({
    totalPrice: cartreducers.items.reduce( (total, item) => 
                        ((total*100 + item.price*100) /100).toFixed(2), 0),
    totalCount: cartreducers.items.length,
    cartItems: unique(cartreducers.items),
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(DropCart);