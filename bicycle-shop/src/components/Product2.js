import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row} from 'reactstrap';
import { connect } from 'react-redux';
import { addToCartAction } from '../actions/index.js'
import { withRouter } from 'react-router-dom'

const Product2 = (props) => {
    //const {title, description, type, price, image, itemCount, addToCartFunc} = props;
    return(
        <Row className="d-flex">
            <Card>
                <CardImg top width="100%" src={props.image} alt="Product image" />
                <CardBody>
                    <div>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.description}</CardSubtitle>
                        <CardText>{props.type}</CardText>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>{props.price} $</h5>
                        <Button color="primary" onClick={props.addToCartFunc.bind(this, props)}>Add To Cart &nbsp;
                        {props.itemCount > 0 && `(${props.itemCount})`}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Row>
    );
}


const mapStateToProps = ( 
    {cartreducers}) => ({
    itemCount: cartreducers.items.reduce( (count, item) => 
                            count + (item.id === cartreducers.lastItem.id ? 1 : 0), 0),
});

const mapDispatchToProps = (dispatch) => ({
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product2));