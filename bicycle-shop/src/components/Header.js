import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, InputGroupText, InputGroupAddon, Input,
 Nav, NavItem, } from 'reactstrap';
 import { NavLink } from 'react-router-dom';
import DropCart from '../containers/DropCart.js';
import '../styles/NavigationMenu.css'

class Header  extends Component {
    state = { NavigationMenuToggle: true };
    render() {
        return( 
            <Container>
                <Row>
                    <Col xs="5" lg={{size:3, order: 1}} style={{backgroundColor: "yellow"}}> {/*Лого */}
                        <Nav style={{backgroundColor: "black"}}>
                            <NavItem> 
                                <NavLink exact to="/" activeClassName="active">
                                    <img src="Logo.jpg" alt="logo" style={{width:"35px"}}></img>
                                    <span style={{fontSize:"25px"}}>BikeGalaxy</span>
                                </NavLink>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col xs="7" lg={{size:3, order: 3}} style={{backgroundColor: "grey"}}> {/* аккаунт корзина */}
                        <Row className="justify-content-end align-items-center">
                           
                                <NavLink exact to="/rental" activeClassName="active">H</NavLink>
                            
                                <NavLink to="/bikes" activeClassName="active">Bi</NavLink>
                             
                                <DropCart />
                            
                        </Row>
                    </Col>
                    <Col xs="9" lg={{size:6, order: 2}} style={{backgroundColor: "green"}}> {/*Поиск */} 
                        <Nav style={{backgroundColor: "black"}}>
                            <NavItem style={{width: "100%"}}> 
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend"> ? </InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </NavItem>
                        </Nav> 
                    </Col> 
                    <Col className="navigation-menu" xs="3" lg={{size:12, order: 4}}>  {/* Меню ссылок */}  
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
                    </Col> 
                </Row>
            </Container>
        );
    }
}



export default Header;