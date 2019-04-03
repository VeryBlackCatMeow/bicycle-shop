import React from 'react';
import { Row, Col, Button, ListGroupItem} from 'reactstrap';

const CartItem = ({item, addToCartFunc, removeFromCartFunc, quantity, decreaseFunc}) => (
    <ListGroupItem>
        <Row className="d-flex justify-content-center align-items-center">
            <Col xs="3">
                <img src={item.image} className="rounded-circle img-fluid w-75" alt="Cart Item"/>
            </Col>
            <Col xs="4">
                <p>{item.type} {item.product}</p>
                <p>{item.title}</p>
                <p>{item.description}</p>
            </Col>
            <Col xs="2">
                <span>{item.price} &nbsp; $</span> 
            </Col>
            <Col xs="2">
                    <Button size="sm" color="primary" onClick={addToCartFunc.bind(this, item)}>+</Button>
                    <div>&nbsp;&nbsp;{quantity[item.id]}</div>
                    <Button size="sm" color="primary" onClick={decreaseFunc.bind(this, item.id)} 
                                        disabled={quantity[item.id] > 1 ? false : true}
                                        style={{width: '2em'}}>-</Button>
            </Col>
            <Col xs="1">
                <Button close onClick={removeFromCartFunc.bind(this, item.id)}/>
            </Col>
        </Row>
    </ListGroupItem>
);

export default CartItem;