import React from 'react';
import { Container } from 'reactstrap';
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
// import {useSelector, useDispatch} from 'react-redux';

// import { searchQueryAction } from '../actions/index.js';

import '../styles/delivery.scss';

const Delivery = () => {

    return(
    <Container className="delivery">
        <div className="heading">
            <h2>Delivery</h2>
        </div>
        <div className="left-column"></div>
        <div className="content"></div>
        <div className="video"></div>
        <div className="right-column"></div>
    </Container>)
};

export default Delivery;