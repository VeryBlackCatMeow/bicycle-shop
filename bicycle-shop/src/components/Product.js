import React from 'react';
import { Card, CardImg, CardBody, Button, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../actions/index.js'
import { withRouter } from 'react-router-dom'

const Product = (props) => {
    const { sku, title, description, type, price, image } = props.location.item;  
    const {cartItems, itemCount, addToCartFunc, removeFromCartFunc} = props; 
    return(
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardImg top width="100%" src={image} alt="Product image" />
                    <CardBody>
                       
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <p>{title}</p>
                <p>{description}</p>
                <p>{type}</p>
                <h5>{price} $</h5>
                {itemCount > 0 && `(${itemCount})`}
                {
                    cartItems.some( a => (a.sku===sku) )
                    ? <Button color="danger" block onClick={removeFromCartFunc.bind(this, sku)}>Remove From Cart</Button>
                    : <Button color="primary" block onClick={addToCartFunc.bind(this, props.location.item)}>Add To Cart</Button>
                } 
            </Col>
        </Row>
    );
}

const mapStateToProps = ( 
    {cartreducers}) => ({
    itemCount: cartreducers.items.reduce( (count, item) => 
                            count + (item.id === cartreducers.lastItem.id ? 1 : 0), 0),
    cartItems: cartreducers.items,
});

const mapDispatchToProps = (dispatch) => ({
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: sku => dispatch(removeFromCartAction(sku)),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));