import React, { Component } from 'react';
import { Card, CardImg, CardBody, Button, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import {  setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import Loading from '../components/Loading';

class Product extends Component {
    
    componentDidMount = () => {
        const { setProductsFunc } = this.props;
    
        axios.get(`/database/${this.props.match.params}.json`).then(({ data }) => {    
            setProductsFunc(data);      
        });
    }

    render() { 
        const {cartItems, itemCount, addToCartFunc, removeFromCartFunc, items} = this.props;
        const item = items[parseInt(this.props.match.params.id, 10)];
        if(!item) return <Loading/>;

        const { sku, title, description, type, price, image } = item;
           
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
                        : <Button color="primary" block onClick={addToCartFunc.bind(this, item)}>Add To Cart</Button>
                    } 
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = ( {cartreducers, productreducers} ) => ({
    items: productreducers.items,
    itemCount: cartreducers.items.reduce( (count, item) => 
                            count + (item.id === cartreducers.lastItem.id ? 1 : 0), 0),
    cartItems: cartreducers.items,
});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: sku => dispatch(removeFromCartAction(sku)),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));