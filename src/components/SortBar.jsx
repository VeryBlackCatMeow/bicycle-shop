import React from 'react';
import { Nav, NavItem, NavLink, Col } from 'reactstrap';

import '../styles/sortBar.css'

const SortBar = ( {setSortFunc, sortBy} ) => {
        return(
            <Col xs="12">
            <Nav pills className="sort-bar justify-content-around">
                <NavItem>
                    <NavLink 
                        active={sortBy==='all'}
                        onClick={setSortFunc.bind(this, 'all')}
                        href='#'>All
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        active={sortBy==='high'}
                        onClick={setSortFunc.bind(this, 'high')}
                        href='#'>Price High
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        active={sortBy==='low'}
                        onClick={setSortFunc.bind(this, 'low')}
                        href='#'>Price Low
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        active={sortBy==='name'}
                        onClick={setSortFunc.bind(this, 'name')}
                        href='#'>Name
                    </NavLink>
                </NavItem>
            </Nav>
            </Col>
        );
}

export default SortBar;