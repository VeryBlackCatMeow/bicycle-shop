import React from 'react';
import { Nav, NavItem, NavLink,
  UncontrolledPopover, PopoverHeader, PopoverBody, Button, Row,
                        ListGroup, ListGroupItem} from 'reactstrap';

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
const Cart = ({image, price, id, removeFromCartFunc}) => (
  
      <ListGroupItem>
        
          <img src={image} class="rounded-circle img-fluid w-25" alt="Cart Item Image"/> {price}
          <Button color="danger" onClick={()=>removeFromCartFunc(id)}>Remove</Button>
          
      </ListGroupItem>
  
  /*<Row>
  <img src={image} class="rounded-circle img-fluid w-25" alt="Cart Item Image"/> {price}
  <Button color="danger"/>
  </Row>*/

);

const Menu = ( {totalPrice, totalCount, cartItems, removeFromCartFunc} ) => (
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
    <NavItem id="PopoverLegacy" >
      <NavLink href="#">Items: &nbsp; {totalCount}</NavLink>
        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
          <PopoverHeader>Shoping Cart
          </PopoverHeader>
          <PopoverBody><ListGroup>
             {cartItems.map( item => (<Cart {...item} removeFromCartFunc={removeFromCartFunc}/>))}</ListGroup>
          </PopoverBody>
        </UncontrolledPopover>
    </NavItem>
  </Nav>
);



export default Menu;