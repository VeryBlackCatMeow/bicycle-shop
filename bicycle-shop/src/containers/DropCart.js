import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Popover, PopoverHeader, PopoverBody, 
                    Button,ListGroup, ListGroupItem} from 'reactstrap';

import { unique } from '../funcLibrary/index.js'
import { removeFromCartAction } from '../actions/index.js'
import DropCartItem from '../components/DropCartItem.js';

const DropCart = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => {
    const[popoverToggler, handlePopoverToggle] = useState(false);

    return(
    <> 
        <div id="PopoverLegacy">
            {
                totalPrice=== 0
                ? 
                <> 
                    <i className='fas fa-shopping-cart'></i>&nbsp;
                    <span>Cart</span>
                </>
                : 
                <>  
                    <i className='fas fa-shopping-cart'></i>&nbsp;
                    <div id="head-cart-count">{totalCount}</div>
                    <span> {totalPrice}$</span>
                </> 
            }
        </div>
        
        <Popover className="drop-cart" isOpen={popoverToggler} toggle={() =>handlePopoverToggle(!popoverToggler)}
                placement="bottom" target="PopoverLegacy" style={{minWidth: '19em'}}>
            <PopoverHeader className="py-3 d-flex justify-content-between">
                <span style={{display: 'block'}} >ShopingCart</span>
                <Button outline size="sm" color="info" 
                    onClick={() =>handlePopoverToggle(!popoverToggler)}>Close</Button> 
            </PopoverHeader>
            <PopoverBody style={{maxHeight: '30em', overflow: 'auto'}}> 
                <ListGroup >
                    { 
                        !cartItems.length
                        ?
                        <ListGroupItem>Your Cart Is Empty :(</ListGroupItem>
                        :
                        cartItems.map( (item) => (<DropCartItem key={item.id} {...item}
                                                    removeFromCartFunc={removeFromCartFunc}/>))
                    }
                </ListGroup>
            </PopoverBody>
            <PopoverHeader>
            <div className="pb-3" > 
                <span>&nbsp; Amount: &nbsp; {totalPrice}</span> 
                <span>&nbsp; Items: &nbsp; {totalCount}</span> 
            </div>
            <div className="d-flex justify-content-between">
                <Link to="/cart" onClick={() =>handlePopoverToggle(!popoverToggler)}>
                    <Button size="sm" color="primary" >View Cart</Button>
                </Link>
                <Link to="/cart" /*style={{pointerEvents: 'none'}}*/>
                    <Button size="sm" color="primary" disabled>To Checkout</Button>
                </Link>
            </div>
            </PopoverHeader>
        </Popover>
    </>
);}

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