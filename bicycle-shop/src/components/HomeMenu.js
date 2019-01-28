import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const HomeMenu = (item) => {
    const {menu, link, image} = item;
    return(
        <Col sm="3">
            <Link to="/bikes">
                <img src="/database/homemenu/1.jpg" class="img-thumbnail" alt="HomeMenuImage"/>
            </Link> 
            <h5>Bikes</h5>
        </Col>
    );
}
export default HomeMenu;