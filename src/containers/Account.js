import React, {useState, useEffect} from 'react';
import { Modal, Popover, ListGroup, ListGroupItem } from 'reactstrap';

import Form from '../containers/Form';
import '../styles/accountMenu.scss';

const Account = () => {
    const [user, logUser] = useState({name: 'Sign Up'});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalToggler, handleModalToggle] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);

    useEffect(()=> {
        if(localStorage.account) {
            logUser(JSON.parse(localStorage.account));
            setIsLoggedIn(true);
        }
    }, []);

    const handleUnlogin = () => {
        delete localStorage.account;
        logUser({name: 'Sign Up'});
        setPopoverOpen(!popoverOpen);
    }

    if(isLoggedIn) {
        return(
            <>
            <div  id="user" onClick={() => setPopoverOpen(!popoverOpen)}>
                <i className='fas fa-user-circle'></i>	&nbsp;
                <span>{user.name}</span>
            </div>
            <Popover placement="bottom" isOpen={popoverOpen} target="user" trigger="legacy">
                <ListGroup className='account-list'>
                    <ListGroupItem disabled tag="a" href="#" action>Profile</ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#" action>Wishlist</ListGroupItem>
                    <ListGroupItem onClick={handleUnlogin} tag="a" href="#" action>Sign Out</ListGroupItem>
                </ListGroup>
            </Popover>
            </>
        )
    } 

    return (
        <>
        <div  id="user" onClick={() => handleModalToggle(!modalToggler)}>
            <i className='fas fa-user-circle'></i>	&nbsp;
            <span>{user.name}</span>
        </div>
        <Modal isOpen={modalToggler} toggle={() => handleModalToggle(!modalToggler)} className="modal-form">
            <Form/>
        </Modal>
        </>
    )    
}

export default Account;