import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import Showcase from '../containers/Showcase';
import Filter from '../containers/Filter';
import Sort from '../containers/Sort';

const Gallery = (props) => {
    return (
        <Container className="gallery">
            <Row> 
                <Col xs="3" lg="2">
                    <Filter/> 
                </Col>
                <Col xs="9" lg="10">
                    <h3 className="product-category">{props.match.params.category}</h3>
                    <Row>
                        <Sort/>
                    </Row>
                    <Row>  
                        <Showcase/>
                    </Row>  
                </Col>
            </Row>
        </Container>
    );
}

export default Gallery;