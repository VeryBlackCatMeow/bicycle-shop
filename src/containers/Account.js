import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom";
import { Modal, Popover, ListGroup, ListGroupItem } from 'reactstrap';

import { setIsLoggedInAction, setUserAction} from '../actions/index.js'
import Form from '../containers/Form';
import '../styles/accountMenu.scss';

const Account = () => {
    const {isLoggedIn, user} = useSelector( state => state.userreducers);
    const dispatch = useDispatch();
    const [modalToggler, handleModalToggle] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);

    useEffect(()=> {
        if(localStorage.account) {
            dispatch(setUserAction(JSON.parse(localStorage.account)));
            dispatch(setIsLoggedInAction(true));
        }
    }, [dispatch]);

    const location = useLocation();
    const history = useHistory();

    const handleUnlogin = () => {
        delete localStorage.account;
        dispatch(setUserAction({name: 'Sign Up'}));
        setPopoverOpen(false);
        dispatch(setIsLoggedInAction(false));
        if(location.pathname.startsWith('/profile')) {
            history.replace('/');
        }
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
                    {
                        location.pathname.startsWith('/profile')
                        ?
                        null
                        :
                        <ListGroupItem tag="a" href={`/profile/${user.userlink}`} action>Profile</ListGroupItem>
                    }
                    
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