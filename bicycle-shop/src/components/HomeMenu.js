import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const HomeMenu = ( {menu, link, image} ) => {
    return(
        <Col className="col-sm-4 my-3">
            <Link to={link}>
                <img src={image} className="img-thumbnail" alt="HomeMenuImage"/>
            </Link> 
            <h5>{menu}</h5>
        </Col>
    );
}
export default HomeMenu;