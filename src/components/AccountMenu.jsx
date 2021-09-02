import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import Cart from '../containers/Cart';
import Form from '../containers/Form';
import '../styles/accountMenu.scss'

const AccountMenu = () => (
    <Nav className="head-account-menu justify-content-end align-items-center">
        <NavItem>
            <i className='fas fa-map-marker-alt'></i>&nbsp;
            <span>Stores</span>
        </NavItem>
        <NavItem>
            <Form/>
        </NavItem>
        <NavItem>	
            <Cart/>
        </NavItem>
    </Nav>
)

export default AccountMenu;