import React from 'react';
import { Row, Col, Button,ListGroupItem} from 'reactstrap';

const DropCartItem = ({id, image, title, price, removeFromCartFunc}) => (
    <ListGroupItem>
        <Row>
            <Col xs="4">
                <img src={image} className="rounded-circle img-fluid" alt="Cart Item"/>
            </Col>
            <Col xs="6">
                <Row>
                <span>{title}</span> &nbsp;
                </Row>
                <Row>
                <span>{price}</span> &nbsp;
                </Row>
            </Col>
            <Col xs="2">
                <Button size="sm" color="danger" close onClick={removeFromCartFunc.bind(this, id)}/>
            </Col>
        </Row>
    </ListGroupItem>
);

export default DropCartItem;