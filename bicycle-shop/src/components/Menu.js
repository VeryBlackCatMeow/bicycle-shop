import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Cart from '../containers/Cart.js';
//<NavLink href="#" active>       <NavLink disabled href="#">Disabled Link
const Menu = () => (
    <Nav tabs className="pb-4 sticky-top" style={{backgroundColor: '#DCDCDC'}}>
        
            
                <NavLink exact to="/" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>Home</NavLink>
            
        

        
            
                <NavLink to="/bikes" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>Bikes</NavLink>
           
        

        
            
                <NavLink to="/about" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>About Us</NavLink>
            
        

        
            
                <NavLink to="/rent" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>Rent</NavLink>
            
        
        
        
            <NavLink to=""></NavLink>
        
        
        <Cart/>
   </Nav>
);



export default Menu;