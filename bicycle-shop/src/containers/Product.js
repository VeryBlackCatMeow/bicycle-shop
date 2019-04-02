import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardBody, Button, 
    TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
    //import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import {  setProductsAction, addToCartAction, removeFromCartAction } from '../actions/index.js'
import Loading from '../components/Loading';
import '../styles/product.css'

const Product = (props) => {
    const { setProductsFunc } = props;
    const [activeTab, toggle] = useState('1');
    useEffect(() => {
        axios.get(`/database/${props.match.params.category}.json`).then(({ data }) => {    
            setProductsFunc(data);      
        });
    });

    
        const {cartItems, addToCartFunc, removeFromCartFunc, items} = props;
        const item = items.find( i => i.id === +(props.match.params.id));
        if(!item) return <Loading/>;
        const { id, product, title, description, type, price, image } = item;
           
        return(
            <Container className="product">
                <h1>{product} {title} <a>MYLINK</a></h1>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardImg top src={image} alt="Product" />
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
                            ? 
                            <Button color="danger" onClick={removeFromCartFunc.bind(this, id)}>Remove From Cart</Button>
                            : 
                            <Button color="primary" onClick={addToCartFunc.bind(this, item)}>Add To Cart</Button>
                        } 
                    </Col>
                    <a>MYLINK</a>
                </Row>
                <div className="product-navbar">
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '1' })}
                                        onClick={() => toggle('1')}
                                >Description
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '2' })}
                                        onClick={() => toggle('2')}
                                >Specification
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '3' })}
                                        onClick={() => toggle('3')}
                                >Reviews
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '4' })}
                                        onClick={() => toggle('4')}
                                >Help & Advice
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                            </Row>
                        </TabPane>

                        <TabPane tabId="2">
                            <h4>Tab 2 Contents wfwfwffwfwfwwfwfwfwf</h4>
                        </TabPane>
                    </TabContent>
                </div>
            </Container> 
        );
    
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

  export default connect(mapStateToProps, mapDispatchToProps)(Product);