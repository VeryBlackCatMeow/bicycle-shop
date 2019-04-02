import React, {useState} from 'react';
import {Navbar, Nav, NavItem, NavbarToggler, Collapse, Button, Modal, 
        ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    const [navMenuToggler, handleMenuToggle] = useState(false);
    return (
    <Navbar light expand="lg" className="head-nav-menu">
        <NavbarToggler onClick={()=>handleMenuToggle(!navMenuToggler)} />

        <Collapse className="head-nav-bar" navbar>
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
        
        <Modal className="head-side-bar" isOpen={navMenuToggler} toggle={()=>handleMenuToggle(!navMenuToggler)}>
            <ModalHeader toggle={()=>handleMenuToggle(!navMenuToggler)}>Modal title
            </ModalHeader>
            <ModalBody>
                <Nav vertical>
                    <NavItem> 
                        <NavLink exact to="/" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/bicycles" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>Bicycles</NavLink>
                    </NavItem>
                    <NavItem>   
                        <NavLink to="/about" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>About Us</NavLink>
                    </NavItem>
                    <NavItem>      
                        <NavLink to="/rental" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>Rent</NavLink>
                    </NavItem>
                </Nav>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>handleMenuToggle(!navMenuToggler)}>Do Something</Button>{' '}
                <Button color="secondary" onClick={()=>handleMenuToggle(!navMenuToggler)}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </Navbar>
);
}   

export default NavMenu;