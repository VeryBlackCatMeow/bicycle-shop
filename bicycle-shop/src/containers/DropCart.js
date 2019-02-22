import React from 'react';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/index.js'
import { Row, Col,
         UncontrolledPopover, PopoverHeader, PopoverBody, 
         Button,
         ListGroup, ListGroupItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const DropCart = ({totalPrice, totalCount, cartItems, removeFromCartFunc}) => (
    <div >
        <Button id="PopoverLegacy"> 
            <span>&nbsp; {totalPrice} &nbsp;({totalCount})</span>
        </Button>
        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                <PopoverHeader>Shoping Cart</PopoverHeader>
                <PopoverBody>
                    <ListGroup>
                        { 
                            !cartItems.length
                            ? 'Your Cart Is Empty :('
                            : cartItems.map( (item) => (<DropCartItem key={item.id} {...item}
                                                        removeFromCartFunc={removeFromCartFunc}/>))
                        }
                    </ListGroup>
                </PopoverBody>
                <PopoverHeader>
                <div>Amount: &nbsp; {totalPrice} &nbsp; Items: &nbsp; {totalCount}</div>
                <div>
                    <Link to="/cart">
                        <Button size="sm" color="primary" >View Cart</Button>
                    </Link>
                    <Button size="sm" color="primary" style={{ float: 'right'}}>Proceed To Checkout</Button>
                </div>
                </PopoverHeader>

            </UncontrolledPopover>
    </div>
);

const DropCartItem = ({id, image, title, price, removeFromCartFunc}) => (
    <ListGroupItem>
        <Row>
            <Col sm="4">
                <img src={image} className="rounded-circle img-fluid" alt="Cart Item"/>
            </Col>
            <Col sm="6">
                <Row>
                <span>{title}</span> &nbsp;
                </Row>
                <Row>
                <span>{price}</span> &nbsp;
                </Row>
            </Col>
            <Col sm="2">
                <Button size="sm" color="danger" close onClick={removeFromCartFunc.bind(this, id)}/>
            </Col>
        </Row>
    </ListGroupItem>
);

const unique = (array) => {
    var newArr = [];
    array.filter( item => {
        var i = newArr.findIndex(x => (x.id === item.id));
        if(i <= -1){
        newArr.push({...item});
        }
    return null;
    })
    return newArr
}

const mapStateToProps = ( { cartreducers }) => ({
    totalPrice: cartreducers.items.reduce( (total, item) => 
                        ((total*100 + item.price*100) /100).toFixed(2), 0),
    totalCount: cartreducers.items.length,
    cartItems: unique(cartreducers.items),
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCartFunc: id => dispatch(removeFromCartAction(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(DropCart);