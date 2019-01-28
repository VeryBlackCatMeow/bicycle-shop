import React from 'react';
import { Nav, NavItem, NavLink,} from 'reactstrap';
import { Link } from 'react-router-dom';

import Cart from '../containers/Cart.js';

const Menu = () => (
    <Nav tabs className="p-5">
        <NavItem>
            <NavLink href="#" active>
                <Link to="/">Home</Link>
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink href="#">
                <Link to="/bikes">Bikes</Link>
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink href="#">
                <Link to="/about">About Us</Link>
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink href="#">
                <Link to="/rent">Rent</Link>
            </NavLink>
        </NavItem>
        
        <NavItem>
            <NavLink disabled href="#">Disabled Link<Link to=""></Link></NavLink>
        </NavItem>
        
        <Cart/>
   </Nav>
);



export default Menu;