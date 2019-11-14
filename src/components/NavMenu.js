import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {Navbar, Nav, NavItem, NavbarToggler, Collapse, Button, Modal, 
    ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../styles/navMenu.scss';

const NavMenu = () => {
    const [navMenuToggler, handleMenuToggle] = useState(false);
    const [mainMenu, setMainMenu] = useState(null);

    useEffect(() => {
        axios.get('/database/homemenu.json')
            .then(({ data }) => {       
                setMainMenu(data);
            })
            .catch(error => console.log(error));
    });

    return (
    <Navbar role="navigation" light expand="lg" className="head-nav-menu">
        <NavbarToggler onClick={()=>handleMenuToggle(!navMenuToggler)} />

        <Collapse className="head-nav-bar" navbar>
            <Nav className="justify-content-around">
                <NavItem> 
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/gallery/allItems" activeClassName="active">All Products</NavLink>
                </NavItem>
                <NavItem>   
                    <NavLink to="/about" activeClassName="active">About Us</NavLink>
                </NavItem>
                <NavItem>      
                    <NavLink to="/locations" activeClassName="active">Locations</NavLink>
                </NavItem>
            </Nav>
        </Collapse>    
        
        <Modal className="head-side-bar" isOpen={navMenuToggler} 
                toggle={()=>handleMenuToggle(!navMenuToggler)}
                >
            <ModalHeader toggle={()=>handleMenuToggle(!navMenuToggler)}>
                BikeGalaxy
            </ModalHeader>
            <ModalBody>
                <Nav vertical>
                    <NavItem> 
                        <NavLink exact to="/" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/gallery/allItems" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>All Products</NavLink>
                    </NavItem>
                    <NavItem>   
                        <NavLink to="/about" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>About Us</NavLink>
                    </NavItem>
                    <NavItem>      
                        <NavLink to="/locations" activeClassName="active" onClick={()=>handleMenuToggle(!navMenuToggler)}>Locations</NavLink>
                    </NavItem>
                    <hr/>
                    {
                        mainMenu
                        ?
                        mainMenu.map((line) => (
                                <NavItem key={line.id}>
                                    <NavLink to={line.link} activeClassName="active"
                                            onClick={()=>handleMenuToggle(!navMenuToggler)}>
                                        {line.menu}
                                    </NavLink>
                                </NavItem>))
                        :
                        null
                    }
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