import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

/*import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <h3>Bicycle:</h3>
                <hr/>
                <h4>Details:</h4>
            </div>
        )
    }
};*/

const Menu = () => (
    <Nav tabs className="p-5">
    <NavItem>
      <NavLink href="#" active>Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Amount</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled href="#">Cart</NavLink>
    </NavItem>
  </Nav>
);



export default Menu;