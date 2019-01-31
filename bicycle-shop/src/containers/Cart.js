import React from 'react';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/index.js'
import {NavItem, NavLink,
  UncontrolledPopover, PopoverHeader, PopoverBody, Button,
                        ListGroup, ListGroupItem} from 'reactstrap';

const Cart = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => (
    <NavItem id="PopoverLegacy">
        <NavLink href="#"> Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</NavLink>
            <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                <PopoverHeader>Shoping Cart</PopoverHeader>
                <PopoverBody>
                    <ListGroup>
                        { 
                            !cartItems.length
                            ? 'Your Cart Is Empty :('
                            : cartItems.map( item => (<CartItem {...item} removeFromCartFunc={removeFromCartFunc}/>))
                        }
                    </ListGroup>
                </PopoverBody>
                <PopoverHeader>
                    <Button color="primary">View Cart</Button>
                    <Button color="primary" style={{ float: 'right'}}>To Checkout</Button>
                </PopoverHeader>

            </UncontrolledPopover>
    </NavItem>
);



const CartItem = ({image, price, sku, removeFromCartFunc}) => 
        (
      <ListGroupItem>
          <img src={image} class="rounded-circle img-fluid w-25" alt="Cart Item Image"/> {price}
          <Button color="danger" onClick={removeFromCartFunc.bind(this, sku)}>Remove</Button>
      </ListGroupItem>
);

const mapStateToProps = ( { cartreducers }) => ({
    totalPrice: cartreducers.items.reduce( (total, item) => 
                        ((total*100 + item.price*100) /100).toFixed(2), 0),
    totalCount: cartreducers.items.length,
    cartItems: cartreducers.items,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);