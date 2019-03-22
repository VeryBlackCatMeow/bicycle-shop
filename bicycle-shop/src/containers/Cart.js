import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction, /*setQuantityAction,*/ decreaseAction } from '../actions/index.js'
import { Container,  Row, Col,
    Button,ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Cart = ({totalPrice, totalCount, cartItems, addToCartFunc, removeFromCartFunc, quantity, setQuantityFunc, decreaseFunc}) => {

    if(!cartItems.length) {
        return (
            <Container>
                <div>Shoping Cart</div>
                <div>'Your Cart Is Empty :('</div>
            </Container>
        );
    }
    else {
        return (
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
        );
    }
};



const CartItem = ({item, addToCartFunc, removeFromCartFunc, quantity, /*setQuantityFunc,*/ decreaseFunc}) => 
        (
        <ListGroupItem>
            <Row>
                <Col xs="3">
                    <img src={item.image} className="rounded-circle img-fluid w-50" alt="Cart Item"/>
                </Col>
                <Col xs="4">
                    <p>{item.title}</p>
                    <p>{item.title}</p>
                    <p>{item.title}</p>
                </Col>
                <Col xs="2">
                    <span>{item.price} &nbsp; $</span> 
                </Col>
                <Col xs="2">
                    <span>
                        <Button size="sm" color="primary" onClick={decreaseFunc.bind(this, item.id)}  disabled={quantity[item.id] > 1 ? false : true}>-</Button>
                        {quantity[item.id]}
                        <Button size="sm" color="primary" onClick={addToCartFunc.bind(this, item)}>+</Button>
                    </span>
                </Col>
                <Col xs="1">
                    <Button size="sm" color="danger" close onClick={removeFromCartFunc.bind(this, item.id)}/>
                </Col>
            </Row>
        </ListGroupItem>
);


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
    //setQuantityFunc: count => dispatch(setQuantityAction(count)),
    decreaseFunc: id => dispatch(decreaseAction(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);

//<Input type="text" value={quantity[item.id]} name={item.id} onChange={e => setQuantityFunc(e.target)} />