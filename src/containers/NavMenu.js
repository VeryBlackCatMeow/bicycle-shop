import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Navbar, NavbarToggler} from 'reactstrap';

import NavBarHead from '../components/NavBarHead';
import NavBarSide from '../components/NavBarSide';
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
    }, []);

    const navlinks = [ 
        {id: 1, name: "Home", url: "/"},
        {id: 2, name: "All Products", url: "/gallery/allItems"},
        {id: 3, name: "About Us", url: "/about"},
        {id: 4, name: "Locations", url: "/locations"}
    ];

    return(
        <Navbar role="navigation" light expand="lg" className="head-nav-menu">
            <NavbarToggler onClick={()=>handleMenuToggle(!navMenuToggler)} />
            <NavBarHead navlinks={navlinks}/>
            <NavBarSide navMenuToggler={navMenuToggler}
                        handleMenuToggle={handleMenuToggle}
                        mainMenu={mainMenu}
                        navlinks={navlinks}
            />
        </Navbar>
    );
}   

export default NavMenu;