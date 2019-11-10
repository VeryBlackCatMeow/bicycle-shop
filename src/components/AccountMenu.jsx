import React from 'react';
import { Nav, NavItem } from 'reactstrap';

import DropCart from '../containers/DropCart';
import '../styles/accountMenu.css'

const AccountMenu = () => (
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
)

export default AccountMenu;