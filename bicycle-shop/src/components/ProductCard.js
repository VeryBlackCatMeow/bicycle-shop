import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const ProductCard = ({title, description, price, type, img}) => (
    <Col className="col-sm-12 col-md-6 col-lg-4 py-3 d-flex">
        <Card>
            <CardImg top width="100%" src={img} alt="Product image" />
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{description}</CardSubtitle>
                <CardText>{type}</CardText>
                <div className="d-flex justify-content-between">
                    <h4>{price} $</h4>
                    <Button color="primary">Add To Cart</Button>
                </div>
            </CardBody>
        </Card>
    </Col>

);

export default ProductCard;



/* <div class="row py-3">

    <div class="col-sm-12 col-md-6 col-lg-4 d-flex">
        <div class="card mb-4">
            <img class="card-img-top" alt="Rent" src="Gallery/business/01.jpg">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h4>20000 баксов</h4>
                <button type="button" class="btn btn-primary">Купить!</button>
              </div>
            </div>
          </div>      
        </div>*/