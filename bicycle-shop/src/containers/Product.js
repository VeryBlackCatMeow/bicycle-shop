import React, { Component } from 'react';
import { Card, CardImg, CardBody, Button, Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import {  setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import Loading from '../components/Loading';

class Product extends Component {
    
    componentDidMount = () => {
        const { setProductsFunc } = this.props;
    
        axios.get(`/database/${this.props.match.params.category}.json`).then(({ data }) => {    
            setProductsFunc(data);      
        });
    }

    render() { 
        const {cartItems, addToCartFunc, removeFromCartFunc, items} = this.props;
        const item = items.find( i => i.id === +(this.props.match.params.id));
        if(!item) return <Loading/>;
        const { id, title, description, type, price, image } = item;
           
        return(
            <Container>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardImg top width="100%" src={image} alt="Product" />
                            <CardBody>
                            
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="6">
                        <p>{title}</p>
                        <p>{description}</p>
                        <p>{type}</p>
                        <h5>{price} $</h5>
                        {
                            cartItems.some( a => (a.id===id) )
                            ? <Button color="danger" block onClick={removeFromCartFunc.bind(this, id)}>Remove From Cart</Button>
                            : <Button color="primary" block onClick={addToCartFunc.bind(this, item)}>Add To Cart</Button>
                        } 
                    </Col>
                </Row>
            </Container> 
        );
    }
}

const mapStateToProps = ( {cartreducers, productreducers} ) => ({
    items: productreducers.items,
    cartItems: cartreducers.items,
});

const mapDispatchToProps = (dispatch) => ({
    setProductsFunc: item => dispatch(setProductsAction(item)),
    addToCartFunc: obj => dispatch(addToCartAction(obj)),
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
  });

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));