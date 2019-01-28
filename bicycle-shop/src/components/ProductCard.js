import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

const ProductCard = (item) => {
    const {title, description, type, price, image, itemCount, addToCartFunc, extraProps} = item;
    return(
        <Col className="col-sm-12 col-md-6 col-lg-4 py-3 d-flex">
            <Card>
                <CardImg top width="100%" height={extraProps.height} src={image} alt="Product image" />
                <CardBody>
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{description}</CardSubtitle>
                        <CardText>{type}</CardText>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>{price} $</h5>
                        <Button color="primary" onClick={addToCartFunc.bind(this, item)}>Add To Cart &nbsp;
                        {itemCount > 0 && `(${itemCount})`}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
export default ProductCard;

/*const ProductCard = ({item, addToCartFunc, itemCount}) => {
    return(
        <Col className="col-sm-12 col-md-6 col-lg-4 py-3 d-flex">
            <Card>
                <CardImg top width="100%" src={item.img} alt="Product image" />
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>{item.description}</CardSubtitle>
                    <CardText>{item.type}</CardText>
                    <div className="d-flex justify-content-between">
                        <h4>{item.price} $</h4>
                        <Button color="primary" onClick={addToCartFunc.bind(this, item)}>Add To Cart &nbsp;
                        {itemCount > 0 && `(${itemCount})`}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
export default ProductCard;*/
