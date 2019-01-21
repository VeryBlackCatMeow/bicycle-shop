import React from 'react';
import { Nav, NavItem, NavLink, 
    InputGroup, InputGroupText, InputGroupAddon, Input} from 'reactstrap';


/*class Sort extends Component {
    state = { activeNav: 'all'};
    
    handleItemClick = ({target: {name}}) => {
        this.setState({activeNav: name});
        const { setSortFunc } = this.props;
        setSortFunc(name);
    };  */
    const Sort = ({ setSortFunc, sortBy, setSearchFunc, searchBy }) => {
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
                        //name='high' 
                        //active={activeNav==='high'}
                        active={sortBy==='high'}
                        onClick={setSortFunc.bind(this, 'high')}
                        href='#'>Price High
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        //name='low'
                        //active={activeNav==='low'}
                        active={sortBy==='low'}
                        onClick={setSortFunc.bind(this, 'low')}
                        href='#'>Price Low
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        //name='name' 
                        //active={activeNav==='name'}
                        active={sortBy==='name'}
                        onClick={setSortFunc.bind(this, 'name')}
                        href='#'>Name
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        //name='avg'
                        //active={activeNav==='avg'}
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
                        <Input value={searchBy} OnChange={e => setSearchFunc(e.target.value)}/>
                    </InputGroup>
                </NavItem>
            </Nav>
        );
    }

export default Sort;