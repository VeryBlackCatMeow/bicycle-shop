import React from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, Input,
        Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import DropCart from '../containers/DropCart.js';
import NavMenu from '../components/NavMenu.js';
import '../styles/header.css'

const Header = () => {
    return( 
        <Container className="header sticky-top" fluid>
            <Container>
                <Row>
                                    {/*Logo */}
                    <Col xs="4" lg={{size:3, order: 1}}>     
                        <div  className="head-logo">
                            <NavLink exact to="/">
                                    <img src="/logo.jpg" alt="logo"></img>&nbsp;
                                    <span>BikeGalaxy</span>
                            </NavLink>
                        </div> 
                    </Col> 
                                {/* Account Menu List */}
                    <Col xs="8" lg={{size:4, order: 3}}>      
                        <Nav className="head-account-menu justify-content-end align-items-center">
                            <NavItem>
                                <i className='fas fa-map-marker-alt'></i>&nbsp;
                                <span>Stores</span>
                            </NavItem>
                            <NavItem>
                                <i className='fas fa-user-circle'></i>	&nbsp;
                                <span>Account</span>
                            </NavItem>
                            <NavItem>	
                                <DropCart/>
                            </NavItem>
                        </Nav>
                    </Col>
                                    {/*Search*/} 
                    <Col xs="9" md="10" lg={{size:5, order: 2}}>
                        <div className="head-search">
                            <InputGroup  className="align-items-center" >
                                <InputGroupAddon addonType="prepend">
                                    <i className='fas fa-search'></i>
                                </InputGroupAddon>
                                <Input placeholder="Temporarily Not Working :)"/>
                            </InputGroup>
                        </div> 
                    </Col> 
                                {/* Navigation Menu */} 
                    <Col xs="3" md="2" lg={{size:12, order: 4}}>
                        <NavMenu/>
                    </Col> 
                </Row>
            </Container>
        </Container>
    );
}

export default Header;

/*handlePopoverToggle = () => {
        this.setState({
            popoverToggler: !this.state.popoverToggler
        });
}*/