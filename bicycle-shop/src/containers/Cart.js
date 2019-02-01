import React from 'react';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/index.js'
import { Button, ButtonGroup, Input, Row, Col,
         ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => (
    <Row>
        <div> Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</div>
            
                <div>Shoping Cart</div>
                <div>
                    <ListGroup>
                        { 
                            !cartItems.length
                            ? 'Your Cart Is Empty :('
                            : cartItems.map( item => (<CartItem {...item} removeFromCartFunc={removeFromCartFunc}/>))
                        }
                    </ListGroup>
                </div>
                <div>
                    <Link to="/checkout">
                    <Button size="sm" color="primary" style={{ float: 'right'}}>Proceed To Checkout</Button>
                    </Link>
                </div>
    </Row>
            
    
);



const CartItem = ({sku, image, title, price, removeFromCartFunc}) => 
        (
      <ListGroupItem>
          <Row>
              <Col sm="4">
                <img src={image} class="rounded-circle img-fluid w-25" alt="Cart Item Image"/>
              </Col>
              <Col sm="4">
                <span>{title}</span> &nbsp; 
              </Col>
              <Col sm="2">
                <span>{price}</span> &nbsp; 
              </Col>
              <Col sm="1">
                <ButtonGroup>
                    <Button size="sm" color="primary" onClick={removeFromCartFunc.bind(this, sku)}>-</Button>
                    <Input type="text"/>
                    <Button size="sm" color="primary" onClick={removeFromCartFunc.bind(this, sku)}>+</Button>
                </ButtonGroup>
              </Col>
              <Col sm="1">
                <Button size="sm" color="danger" close onClick={removeFromCartFunc.bind(this, sku)}/>
              </Col>
            
            
            
            
            
            
          </Row>
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