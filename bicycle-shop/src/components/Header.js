import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input,
        Navbar, Nav, NavItem, NavbarToggler, Collapse, Button, Modal, 
        ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import DropCart from '../containers/DropCart.js';
import '../styles/header.css'

class Header extends Component {
    state = { 
        navMenuToggler: false,
        popoverToggler: false
     };
    
    handleMenuToggle = () => {
        this.setState({
            navMenuToggler: !this.state.navMenuToggler
        });
      }

    handlePopoverToggle = () => {
        this.setState({
            popoverToggler: !this.state.popoverToggler
        });
      }
    
    render() {
        return( 
            <Container className="header sticky-top" fluid="true">
            <Container>
                <Row>
                    <Col xs="4" lg={{size:3, order: 1}}>                                             {/*Лого */}
                        <Nav  className="head-logo align-items-center" style={{backgroundColor: "black"}}>
                            <NavItem className="align-items-center"> 
                                <NavLink exact to="/">
                                    <img src="logo.jpg" alt="logo"></img>
                                    <span>BikeGalaxy</span>
                                </NavLink>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="8" lg={{size:4, order: 3}}>                                          {/* аккаунт корзина */}
                        <Nav className="head-account-menu justify-content-end align-items-center" style={{backgroundColor: "black"}}>
                            <NavItem>
                                <NavLink exact to="/rental" activeClassName="active">	
                                    <i className='fas fa-map-marker-alt'></i>
                                    <span>Stores</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/bicycles" activeClassName="active">
                                    <i className='fas fa-user-circle'></i>
                                    <span>Account</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>	
                                <NavLink to="#" activeClassName="active">
                                    <DropCart popoverToggler={this.state.popoverToggler} handlePopoverToggle={this.handlePopoverToggle}/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="10" lg={{size:5, order: 2}}>                                             {/*Поиск */} 
                        <Nav className="head-search" style={{backgroundColor: "black"}}>
                            <NavItem> 
                                <InputGroup>
                                    <InputGroupAddon className="align-items-center"  addonType="prepend">
                                        <i className='fas fa-search'></i>
                                    </InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="2" lg={{size:12, order: 4}}>                                        {/* Меню ссылок */} 
                        <Navbar light expand="lg">
                            <NavbarToggler className="head-nav-menu-toggler" onClick={this.handleMenuToggle} />

                            <Collapse className="head-nav-menu" navbar>
                                <Nav className="justify-content-around">
                                    <NavItem> 
                                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/bicycles" activeClassName="active">Bicycles</NavLink>
                                    </NavItem>
                                    <NavItem>   
                                        <NavLink to="/about" activeClassName="active">About Us</NavLink>
                                    </NavItem>
                                    <NavItem>      
                                        <NavLink to="/rental" activeClassName="active">Rent</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>    
                                
                            <Modal className="head-side-menu" isOpen={this.state.navMenuToggler} toggle={this.handleMenuToggle}>
                                    <ModalHeader toggle={this.handleMenuToggle}>Modal title
                                    </ModalHeader>
                                    <ModalBody>
                                        <Nav vertical>
                                            <NavItem> 
                                                <NavLink exact to="/" activeClassName="active" onClick={this.handleMenuToggle}>Home</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink to="/bicycles" activeClassName="active" onClick={this.handleMenuToggle}>Bicycles</NavLink>
                                            </NavItem>
                                            <NavItem>   
                                                <NavLink to="/about" activeClassName="active" onClick={this.handleMenuToggle}>About Us</NavLink>
                                            </NavItem>
                                            <NavItem>      
                                                <NavLink to="/rental" activeClassName="active" onClick={this.handleMenuToggle}>Rent</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.handleMenuToggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.handleMenuToggle}>Cancel</Button>
                                    </ModalFooter>
                            </Modal>
                        </Navbar>
                    </Col> 
                </Row>
            </Container>
            </Container>
        );
    }
}



export default Header;

/**<Row className="justify-content-end align-items-center">
        <div><NavLink exact to="/rental" activeClassName="active">Ho</NavLink></div>
        <div><NavLink to="/bicycles" activeClassName="active">Bic</NavLink></div>
        <DropCart />
    </Row> */