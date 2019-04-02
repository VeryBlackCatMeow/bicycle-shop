import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col} from 'reactstrap';
    //className="d-flex justify-content-between align-items-center"
const ProductCard = (props) => { //width="100%" style={{height: '100%'}}
    const {id, product, title, description, type, price, image, category,
                cartItems, addToCartFunc, removeFromCartFunc/*, extraProps*/} = props;
    return(
        <Col className="col-12 col-md-6 col-lg-4 py-3"> 
            <Card className="product-card">
                <Link to={`/${category}/${id}`}>
                    <CardImg top /*height={extraProps.heightImg}*/ src={image} alt="Product" /> 
                </Link>  
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{type} {product}</CardSubtitle>
                        <CardText></CardText>
                        <h5 className="card-price">{price} $</h5>
                        {
                            cartItems.some( a => (a.id===id) )
                            ? 
                            <Button color="secondary" block onClick={removeFromCartFunc.bind(this, id)}>
                                <span className="btn-added">Added To Cart Already</span>
                                <span className="btn-remove"> Remove From Cart</span>
                            </Button>
                            :
                            <Button color="primary" block onClick={addToCartFunc.bind(this, props)}>Add To Cart</Button>
                        } 
                    </CardBody>
            </Card>
        </Col>
    );
}
    export default ProductCard;

/* <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{description}</CardSubtitle>
                        <CardText>{type}</CardText>
                        <h5>{price} $</h5>
                        {
                            cartItems.some( a => (a.id===id) )
                            ? 
                            <Button color="secondary" block onClick={removeFromCartFunc.bind(this, id)}>
                                <span className="btn-added">Added To Cart Already</span>
                                <span className="btn-remove"> Remove From Cart</span>
                            </Button>
                            :
                            <Button color="primary" block onClick={addToCartFunc.bind(this, props)}>Add To Cart</Button>
                        } 
                    </CardBody> */