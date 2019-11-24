import React from 'react';
import { Row, Col, Card, CardImg, CardBody, Button } from 'reactstrap';

import '../styles/product.scss'

const ProductBody = ({cartItems, addToCartFunc, removeFromCartFunc, item}) => {
    const { id, brand, title, type, price, product, image } = item;

    return(
        <Row className="product-top-section">
            <Col xs="12" md="6">
                <Card>
                    <CardImg top src={image} alt="Product" />
                    <CardBody>
                    
                    </CardBody>
                </Card>
            </Col>
            <Col xs="12" md="6">
                <h6>{type} {product}</h6>
                <h4>{brand} {title}</h4>                
                <h3>{price} $</h3>
                {
                    cartItems.some( a => (a.id===id) )
                    ? 
                    <Button color="danger" onClick={removeFromCartFunc.bind(this, id)}>Remove From Cart</Button>
                    : 
                    <Button color="primary" onClick={addToCartFunc.bind(this, item)}>Add To Cart</Button>
                } 
            </Col>
        </Row>
    )
}

export default ProductBody;