import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import { connect } from 'react-redux';
import { addToCartAction } from '../actions/index.js'
import { withRouter } from 'react-router-dom'

const Product = (props) => {
    const {title, description, type, price, image, itemCount, addToCartFunc} = props;
    return(
        <Row className="d-flex">
            <Card>
                <CardImg top width="100%" src={image} alt="Product image" />
                <CardBody>
                    <div>
                        <CardTitle>{title}</CardTitle>
                        <CardSubtitle>{description}</CardSubtitle>
                        <CardText>{type}</CardText>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>{price} $</h5>
                        <Button color="primary" onClick={addToCartFunc.bind(this, props)}>Add To Cart &nbsp;
                        {itemCount > 0 && `(${itemCount})`}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Row>
    );
}
/*const Product = (item)=> {
    const {extraProps} = item;
    return(
        <Row className="d-flex">
            Link is worked {extraProps.price} 
            <img  src={extraProps.image} alt="Product image" />
        </Row>
    );

}*/

const mapStateToProps = ( 
    {cartreducers}) => ({
    itemCount: cartreducers.items.reduce( (count, item) => 
                            count + (item.id === cartreducers.lastItem.id ? 1 : 0), 0),
});

const mapDispatchToProps = (dispatch) => ({
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));