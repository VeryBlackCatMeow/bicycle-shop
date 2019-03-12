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
            <Container>
                <Row>
                    <Col xs="5" lg={{size:3, order: 1}}>                                             {/*Лого */}
                        <Nav  className="top-logo" style={{backgroundColor: "green"}}>
                            <NavItem> 
                                <NavLink exact to="/">
                                    <img src="logo.jpg" alt="logo"></img>
                                    <span>BikeGalaxy</span>
                                </NavLink>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="7" lg={{size:3, order: 3}} style={{backgroundColor: "blue"}}>        {/* аккаунт корзина */}
                        <Nav className="top-account-menu justify-content-end align-items-center">
                            <NavItem>
                                <NavLink exact to="/rental" activeClassName="active">	
                                    <i className='fas fa-spider' style={{fontSize: '32px'}}></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/bicycles" activeClassName="active">
                                <i className='fas fa-user-circle' style={{fontSize: '32px'}}></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>	
                                <NavLink to="#" activeClassName="active">
                                    <DropCart popoverToggler={this.state.popoverToggler} handlePopoverToggle={this.handlePopoverToggle}/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs="10" lg={{size:6, order: 2}}>                                             {/*Поиск */} 
                        <Nav className="top-search" style={{backgroundColor: "black"}}>
                            <NavItem> 
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="2" lg={{size:12, order: 4}}>                                        {/* Меню ссылок */} 
                        <Navbar light expand="lg">
                            <NavbarToggler onClick={this.handleMenuToggle} />

                            <Collapse className="top-nav-menu" navbar>
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
                                
                            <Modal className="side-nav-menu" isOpen={this.state.navMenuToggler} toggle={this.handleMenuToggle}>
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
        );
    }
}



export default Header;

/**<Row className="justify-content-end align-items-center">
        <div><NavLink exact to="/rental" activeClassName="active">Ho</NavLink></div>
        <div><NavLink to="/bicycles" activeClassName="active">Bic</NavLink></div>
        <DropCart />
    </Row> */



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
                                                <NavLink to="/bicycles" activeClassName="active" >bicycles</NavLink>
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