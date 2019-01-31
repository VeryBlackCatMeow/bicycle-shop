import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';

const ProductCard = (item) => { //width="100%" height={extraProps.height} style={{height: '100%'}}
    const {id, title, description, type, price, image, itemCount, addToCartFunc, extraProps} = item;
    return(
        <Col className="col-sm-12 col-md-6 col-lg-4 py-3 d-flex"> 
            <Card>
                <Link to={{pathname:`${extraProps.path}/${id}`, item: item}}>
                    <CardImg top width="100%" height={extraProps.height} d-block src={image} alt="Product image" /> 
                </Link>  
                <CardBody>
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{description}</CardSubtitle>
                        <CardText>{type}</CardText>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>{price} $</h5>
                        <Button color="primary" onClick={addToCartFunc.bind(this, item)}>Add To Cart
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
