import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction, setQuantityAction, decreaseAction } from '../actions/index.js'
import { Button, ButtonGroup, Input, Row, Col,
         ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = ({totalPrice, totalCount, cartItems, addToCartFunc, removeFromCartFunc, quantity, setQuantityFunc, decreaseFunc}) => (
    <Row>
        <div> Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</div>
            
                <div>Shoping Cart</div>
                <div>
                    <ListGroup>
                        { 
                            !cartItems.length
                            ? 'Your Cart Is Empty :('
                            : cartItems.map( (item, id) => (<CartItem key={id} item={item} 
                                    removeFromCartFunc={removeFromCartFunc} addToCartFunc={addToCartFunc} 
                                    setQuantityFunc={setQuantityFunc} quantity={quantity}
                                    decreaseFunc={decreaseFunc} />))
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



const CartItem = ({item, addToCartFunc, removeFromCartFunc, quantity, setQuantityFunc, decreaseFunc}) => 
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
                
                    <Button size="sm" color="primary" onClick={decreaseFunc.bind(this, item.sku)}  disabled={quantity[item.sku] > 1 ? '' : 'disabled'}>-</Button>
                    <Input type="text" value={quantity[item.sku]} name={item.sku} onChange={e => setQuantityFunc(e.target)} />
                    <Button size="sm" color="primary" onClick={addToCartFunc.bind(this, item)}>+</Button>
                
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

const mapStateToProps = ( { cartreducers } ) => ({
    totalPrice: cartreducers.items.reduce( (total, item) => 
                        ((total*100 + item.price*100) /100).toFixed(2), 0),
    totalCount: cartreducers.items.length,
    cartItems: unique(cartreducers.items),
    quantity: cartreducers.quantity,
});

const mapDispatchToProps = (dispatch) => ({
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: sku => dispatch(removeFromCartAction(sku)),
    setQuantityFunc: count => dispatch(setQuantityAction(count)),
    decreaseFunc: sku => dispatch(decreaseAction(sku)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);