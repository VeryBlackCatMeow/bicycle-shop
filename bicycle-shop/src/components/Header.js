import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input,
 Navbar, Nav, NavItem, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 import { NavLink } from 'react-router-dom';
import DropCart from '../containers/DropCart.js';
import '../styles/header.css'

class Header extends Component {
    state = { navMenuToggler: false };
    handleMenuToggle = () => {
        this.setState({
            navMenuToggler: !this.state.navMenuToggler
        });
      }
    render() {
        return( 
            <Container>
                <Row>
                    <Col xs="5" lg={{size:3, order: 1}} style={{backgroundColor: "yellow"}}> {/*Лого */}
                        <Nav style={{backgroundColor: "black"}}>
                            <NavItem> 
                                <NavLink exact to="/" activeClassName="active">
                                    <img src="logo.jpg" alt="logo" style={{width:"35px"}}></img>
                                    <span style={{fontSize:"25px"}}>BikeGalaxy</span>
                                </NavLink>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="7" lg={{size:3, order: 3}} style={{backgroundColor: "grey"}}> {/* аккаунт корзина */}
                        <Row className="justify-content-end align-items-center">
                            <NavLink exact to="/rental" activeClassName="active">Ho</NavLink>
                            <NavLink to="/bikes" activeClassName="active">Bic</NavLink>
                            <DropCart />
                        </Row>
                    </Col>
                    <Col xs="9" lg={{size:6, order: 2}}> {/*Поиск */} 
                        <Nav style={{backgroundColor: "black"}}>
                            <NavItem style={{width: "100%"}}> 
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend"> ? </InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="3" lg={{size:12, order: 4}}>  {/* Меню ссылок */} 
                        <Navbar light expand="md">
                            <NavbarToggler onClick={this.handleMenuToggle} />

                            <Collapse className="top-nav-menu" navbar>
                                <Nav className="justify-content-around">
                                    <NavItem> 
                                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/bikes" activeClassName="active">Bikes</NavLink>
                                    </NavItem>
                                    <NavItem>   
                                        <NavLink to="/about" activeClassName="active">About Us</NavLink>
                                    </NavItem>
                                    <NavItem>      
                                        <NavLink to="/rental" activeClassName="active">Rent</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>    
                                
                            <Modal className="side-nav-menu" isOpen={this.state.navMenuToggler} toggle={this.handleMenuToggle}>
                                    <ModalHeader toggle={this.handleMenuToggle}>Modal title
                                    </ModalHeader>
                                    <ModalBody>
                                        <Nav vertical>
                                            <NavItem> 
                                                <NavLink exact to="/" activeClassName="active" onClick={this.handleMenuToggle}>Home</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink to="/bikes" activeClassName="active" onClick={this.handleMenuToggle}>Bikes</NavLink>
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
        );
    }
}



export default Header;

/**  <Navbar light expand="md">
                            <NavbarToggler onClick={this.handleMenuToggle} />
                            
                                <Modal isOpen={this.state.navMenuToggler} toggle={this.handleMenuToggle}>
                                    <ModalHeader toggle={this.handleMenuToggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                    <Collapse isOpen={this.state.navMenuToggler} navbar>
                                        <Nav className="justify-content-around">
                                            <NavItem  onClick={this.handleMenuToggle}> 
                                                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                                            </NavItem>
                                            <NavItem onClick={this.handleMenuToggle}>
                                                <NavLink to="/bikes" activeClassName="active" >Bikes</NavLink>
                                            </NavItem>
                                            <NavItem onClick={this.handleMenuToggle}>   
                                                <NavLink to="/about" activeClassName="active">About Us</NavLink>
                                            </NavItem>
                                            <NavItem onClick={this.handleMenuToggle}>      
                                                <NavLink to="/rental" activeClassName="active">Rent</NavLink>
                                            </NavItem>
                                        </Nav>
                                        </Collapse>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.handleMenuToggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.handleMenuToggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                                
                        </Navbar>*/