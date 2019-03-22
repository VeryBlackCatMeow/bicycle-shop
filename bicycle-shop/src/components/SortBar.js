import React from 'react';
import { Nav, NavItem, NavLink, Col,
    InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';

    /*handleItemClick = ({target: {name}}) => {
        this.setState({activeNav: name});
        const { setSortFunc } = this.props;
        setSortFunc(name);
    };  */
const SortBar = ({ setSortFunc, sortBy, setSearchFunc, searchBy }) => {
        return(
            <Col xs="12">
            <Nav pills className="justify-content-between">
                <NavItem>
                    <NavLink 
                        //name='all' 
                        //active={activeNav==='all'}
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
                <NavItem style={{backgroundColor: 'grey'}}>
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