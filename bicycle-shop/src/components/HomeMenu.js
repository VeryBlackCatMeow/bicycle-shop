import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const HomeMenu = ( {menu, link, image} ) => {
    return(
        <Col className="col-12 col-sm-6 col-md-4 my-3">
            <Link to={link}>
                <img src={image} className="img-thumbnail" alt="HomeMenuImage"/>
                <h5>{menu}</h5>
            </Link>
        </Col>
    );
}
export default HomeMenu;