import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/logo.css'

const Logo = () => (
    <div  className="head-logo">
        <NavLink exact to="/">
                <img src="/logo.jpg" alt="logo"></img>&nbsp;
                <span>BikeGalaxy</span>
        </NavLink>
    </div> 
)

export default Logo;