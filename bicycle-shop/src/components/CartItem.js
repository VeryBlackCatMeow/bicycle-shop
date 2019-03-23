import React from 'react';
import { Row, Col, Button, ListGroupItem} from 'reactstrap';

const CartItem = ({item, addToCartFunc, removeFromCartFunc, quantity, decreaseFunc}) => (
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
                <Button close onClick={removeFromCartFunc.bind(this, item.id)}/>
            </Col>
        </Row>
    </ListGroupItem>
);

export default CartItem;