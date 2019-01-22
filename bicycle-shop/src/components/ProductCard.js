import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col,
                            ListGroup, ListGroupItem} from 'reactstrap';

const Cart = ({img}) => (
    <ListGroup>
        <ListGroupItem>
            <img src={img} class="rounded-circle" alt="Cart Item Image"/>
            <Button color="danger"/>
        </ListGroupItem>
    </ListGroup>

);


const ProductCard = (items) => {
        const {title, description, price, type, img, addToCartFunc} = items;
    return(
        <Col className="col-sm-12 col-md-6 col-lg-4 py-3 d-flex">
            <Card>
                <CardImg top width="100%" src={img} alt="Product image" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{description}</CardSubtitle>
                    <CardText>{type}</CardText>
                    <div className="d-flex justify-content-between">
                        <h4>{price} $</h4>
                        <Button color="primary" onClick={addToCartFunc.bind(this, items)}>Add To Cart</Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
export default ProductCard;
