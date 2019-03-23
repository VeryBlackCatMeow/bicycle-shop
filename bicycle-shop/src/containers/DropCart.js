import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Popover, PopoverHeader, PopoverBody, 
                    Button,ListGroup, ListGroupItem} from 'reactstrap';

import { removeFromCartAction } from '../actions/index.js'
import DropCartItem from '../components/DropCartItem.js';

const DropCart = ({totalPrice, totalCount, cartItems, removeFromCartFunc, popoverToggler, handlePopoverToggle}) => {
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
        
            <Popover className="drop-cart" isOpen={popoverToggler} toggle={handlePopoverToggle} /*trigger="legacy"*/ 
                    placement="bottom" target="PopoverLegacy" style={{minWidth: '19em'}}>
                <PopoverHeader className="py-3 d-flex justify-content-between">
                    <span style={{display: 'block'}} >ShopingCart</span>
                    <Button outline size="sm" color="info" 
                        onClick={handlePopoverToggle}>Close</Button> 
                </PopoverHeader>
                <PopoverBody style={{maxHeight: '30em', overflow: 'auto'}}> 
                    <ListGroup >
                        { 
                            !cartItems.length
                            ?
                            <ListGroupItem>'Your Cart Is Empty :('</ListGroupItem>
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
                    <Link to="/cart" onClick={handlePopoverToggle}>
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


/*
                    <Link to="/cart">
                        <Button size="sm" color="primary">View Cart</Button>
                    </Link>
                    <Link to="/cart">
                        <Button size="sm" color="primary" style={{ float: 'right'}}>To Checkout</Button>
                    </Link>
*/