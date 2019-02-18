import React from 'react';
import { Nav, NavItem, NavLink, 
    InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';

    /*handleItemClick = ({target: {name}}) => {
        this.setState({activeNav: name});
        const { setSortFunc } = this.props;
        setSortFunc(name);
    };  */
const SortBar = ({ setSortFunc, sortBy, setSearchFunc, searchBy }) => {
        return(
            <Nav pills >
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
                <NavItem>
                    <NavLink 
                        active={sortBy==='avg'}
                        onClick={setSortFunc.bind(this, 'avg')}
                        href='#'>Avg customer review
                    </NavLink>
                </NavItem>
                <NavItem>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>Search By Product</InputGroupText>
                        </InputGroupAddon>
                        <Input value={searchBy} 
                               onChange={e => setSearchFunc(e.target.value)}/>
                    </InputGroup>
                </NavItem>
            </Nav>
        );
}

export default SortBar;