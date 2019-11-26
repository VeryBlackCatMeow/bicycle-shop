import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Popover, PopoverHeader, PopoverBody, 
                    Button,ListGroup, ListGroupItem} from 'reactstrap';

import DropCartItem from './DropCartItem';

const DropCartDown = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => {
    const[popoverToggler, handlePopoverToggle] = useState(false);

    return( 
        <Popover className="drop-cart"
                isOpen={popoverToggler}
                toggle={() => handlePopoverToggle(!popoverToggler)}
                placement="bottom"
                target="PopoverLegacy">
            <PopoverHeader className="py-3 d-flex justify-content-between">
                <span>Shoping Cart</span>
                <Button outline size="sm"
                        color="primary" 
                        onClick={() => handlePopoverToggle(!popoverToggler)}>
                    Close
                </Button> 
            </PopoverHeader>
            <PopoverBody> 
                <ListGroup >
                    { 
                        !cartItems.length
                        ?
                        <ListGroupItem>Your Cart Is Empty :(</ListGroupItem>
                        :
                        cartItems.map( item => (
                            <DropCartItem key={item.id}
                                        {...item}
                                        removeFromCartFunc={removeFromCartFunc}/>)
                        )
                    }
                </ListGroup>
            </PopoverBody>
            <PopoverHeader>
                <span>&nbsp; Total: &nbsp; {totalPrice}</span> &nbsp;
                <span>&nbsp; Items: &nbsp; {totalCount}</span> 
                <div className="pt-3 d-flex justify-content-between">
                    <Link to="/cart" onClick={() => handlePopoverToggle(!popoverToggler)}>
                        <Button size="sm" color="primary" >View Cart</Button>
                    </Link>
                    <Link to="/cart">
                        <Button size="sm" color="primary" disabled>To Checkout</Button>
                    </Link>
                </div>
            </PopoverHeader>
        </Popover>
    );
}

export default DropCartDown;