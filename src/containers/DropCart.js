import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Popover, PopoverHeader, PopoverBody, 
                    Button,ListGroup, ListGroupItem} from 'reactstrap';

import { unique } from '../funcLibrary/index.js'
import { removeFromCartAction } from '../actions/index.js'
import DropCartItem from '../components/DropCartItem';
import '../styles/cart.css';
import '../styles/dropCart.css'

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
        
        <Popover className="drop-cart" isOpen={popoverToggler} toggle={() => handlePopoverToggle(!popoverToggler)}
                placement="bottom" target="PopoverLegacy">
            <PopoverHeader className="py-3 d-flex justify-content-between">
                <span>Shoping Cart</span>
                <Button outline size="sm" color="primary" 
                    onClick={() => handlePopoverToggle(!popoverToggler)}>Close</Button> 
            </PopoverHeader>
            <PopoverBody> 
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
                <span>&nbsp; Total: &nbsp; {totalPrice}</span> &nbsp;
                <span>&nbsp; Items: &nbsp; {totalCount}</span> 
                <div className="pt-3 d-flex justify-content-between">
                    <Link to="/cart" onClick={() => handlePopoverToggle(!popoverToggler)}>
                        <Button size="sm" color="primary" >View Cart</Button>
                    </Link>
                    <Link to="/cart">
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