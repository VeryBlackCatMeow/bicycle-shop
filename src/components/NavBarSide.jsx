import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, NavItem, Button, Modal, 
    ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NavBarSide = ( {navMenuToggler, handleMenuToggle, mainMenu, navlinks} ) => (
    <Modal className="head-side-bar"
            isOpen={navMenuToggler} 
            toggle={()=>handleMenuToggle(!navMenuToggler)}>
        <ModalHeader toggle={()=>handleMenuToggle(!navMenuToggler)}>
            BikeGalaxy
        </ModalHeader>
        <ModalBody>
            <Nav vertical>
                {
                    navlinks.map( link => (
                        <NavItem key={link.id}> 
                            <NavLink exact to={link.url}
                                        activeClassName="active"
                                        onClick={()=>handleMenuToggle(!navMenuToggler)}>
                                {link.name}
                            </NavLink>
                        </NavItem>
                    ))
                }
                <hr/>
                {
                    mainMenu
                    ?
                    mainMenu.map( line => (
                            <NavItem key={line.id}>
                                <NavLink to={line.link}
                                            activeClassName="active"
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
);

export default NavBarSide;