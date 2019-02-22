import React from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../styles/NavigationMenu.css'
//<NavLink href="#" active>       <NavLink disabled href="#">Disabled Link
/*const NavigationMenu = () => (
    <Container>
        <NavLink exact to="/" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>Home</NavLink>
        <NavLink to="/bikes" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>Bikes</NavLink>
        <NavLink to="/about" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>About Us</NavLink>
        <NavLink to="/rent" activeStyle={{color: "red", fontWeight: "bold", border: "solid black 1px" }} style={{padding: "10px"}}>Rent</NavLink>
        <NavLink to=""></NavLink>
   </Container>
);*/

const NavigationMenu = () => (
    <Container>
        <Nav /*justified*/>
            <NavItem> 
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/bikes" activeClassName="active">Bikes</NavLink>
            </NavItem>
            <NavItem>   
                <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </NavItem>
            <NavItem>      
                <NavLink to="/rent" activeClassName="active">Rent</NavLink>
            </NavItem>
        </Nav>
   </Container>
);

export default NavigationMenu;