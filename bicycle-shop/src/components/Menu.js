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

const Menu = ( {totalPrice, totalCount, addToCartFunc, removeFromCartFunc} ) => (
    <Nav tabs className="p-5">
    <NavItem>
      <NavLink href="#" active>Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Amount: &nbsp; {totalPrice}</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Items: &nbsp; {totalCount}</NavLink>
    </NavItem>
  </Nav>
);



export default Menu;