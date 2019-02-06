import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../actions/index.js'
import { Button, ButtonGroup, Input, Row, Col,
         ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = ({totalPrice, totalCount, cartItems, addToCartFunc, removeFromCartFunc}) => (
    <Row>
        <div> Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</div>
            
                <div>Shoping Cart</div>
                <div>
                    <ListGroup>
                        { 
                            !cartItems.length
                            ? 'Your Cart Is Empty :('
                            : cartItems.map( (item, id) => (<CartItem key={id} item={item}
                                    removeFromCartFunc={removeFromCartFunc} addToCartFunc={addToCartFunc} />))
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



const CartItem = ({item, addToCartFunc, removeFromCartFunc}) => 
        (
      <ListGroupItem>
          <Row>
              <Col sm="4">
                <img src={item.image} className="rounded-circle img-fluid w-25" alt="Cart Item Image"/>
              </Col>
              <Col sm="4">
                <span>{item.title}</span> &nbsp; 
              </Col>
              <Col sm="2">
                <span>{item.price}</span> &nbsp; 
              </Col>
              <Col sm="1">
                <ButtonGroup>
                    <Button size="sm" color="primary" onClick={removeFromCartFunc.bind(this, item.sku)}>-</Button>
                    <Input type="text"/>
                    <Button size="sm" color="primary" onClick={addToCartFunc.bind(this, item)}>+</Button>
                </ButtonGroup>
              </Col>
              <Col sm="1">
                <Button size="sm" color="danger" close onClick={removeFromCartFunc.bind(this, item.sku)}/>
              </Col>
          </Row>
      </ListGroupItem>
);

const unique = (array) => {
    var newArr = [];
    array.filter( item => {
        var i = newArr.findIndex(x => (x.sku == item.sku));
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
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);