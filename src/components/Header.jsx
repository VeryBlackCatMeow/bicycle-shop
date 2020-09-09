import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Logo from '../components/Logo';
import Search from '../containers/Search';
import AccountMenu from '../components/AccountMenu';
import NavMenu from '../containers/NavMenu';
import '../styles/header.scss'

const Header = () => {
    return( 
        <header className="header sticky-top">
            <Container>
                <Row>
                    <Col xs="4" lg={{size:3, order: 1}}>     
                        <Logo/>
                    </Col> 
                    <Col xs="8" lg={{size:4, order: 3}}>      
                        <AccountMenu/>
                    </Col>
                    <Col xs="9" md="10" lg={{size:5, order: 2}}>
                        <Search/>
                    </Col>                               
                    <Col xs="3" md="2" lg={{size:12, order: 4}}>
                        <NavMenu/>
                    </Col> 
                </Row>
            </Container>
        </header>
    );
}

export default Header;