import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, NavItem } from 'reactstrap';

const NavBarHead = ( {navlinks} ) => (
    <Collapse className="head-nav-bar" navbar>
        <Nav className="justify-content-around">
            {
                navlinks.map(link => (
                    <NavItem key={link.id}> 
                        <NavLink exact to={link.url} activeClassName="active">
                            {link.name}
                        </NavLink>
                    </NavItem>
                ))
            }
        </Nav>
    </Collapse>  
);

export default NavBarHead;