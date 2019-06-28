import React from 'react';
import { Nav, NavItem, NavLink, Col,
    InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';

const SortBar = ({ setSortFunc, sortBy, setSearchFunc, searchBy }) => {
        return(
            <Col xs="12">
            <Nav pills className="sort-bar justify-content-between">
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
                <NavItem>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search</InputGroupText>
                        </InputGroupAddon>
                        <Input value={searchBy} 
                               onChange={e => setSearchFunc(e.target.value)}/>
                    </InputGroup>
                </NavItem>
            </Nav>
            </Col>
        );
}

export default SortBar;
/**Avg customer review */