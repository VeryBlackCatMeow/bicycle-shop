import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';


/*class Sort extends Component {
    state = { activeNav: 'all'};
    
    handleItemClick = ({target: {name}}) => {
        this.setState({activeNav: name});
        const { setSortFunc } = this.props;
        setSortFunc(name);
    };  */
    const Sort = ({ setSortFunc, sortBy }) => {
    
    //render() {
      //  const { activeNav } = this.state;   
        return(
            <Nav pills >
                <NavItem>
                    <NavLink 
                        //name='all' 
                        //active={activeNav==='all'}
                        active={sortBy==='all'||sortBy==='standart'}
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
            </Nav>
        );
    }
//}



export default Sort;