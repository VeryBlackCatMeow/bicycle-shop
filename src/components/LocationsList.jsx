import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {FlyToInterpolator} from 'react-map-gl';

const LocationsList = ( {setViewport, shops, highlightedShop, handleHighlightShop} ) => (
    <ListGroup className="loc-shoplist"> 
        {
            shops.map( shop => (
                <ListGroupItem key = {shop.properties.shop_id}
                        className={highlightedShop===shop.properties.shop_id?'active':null} 
                        onClick={() => {setViewport({
                            latitude: shop.geometry.coordinates[0],
                            longitude: shop.geometry.coordinates[1],
                            zoom: 10,
                            transitionDuration: 5000,
                            transitionInterpolator: new FlyToInterpolator({curve: 2.6})
                        });
                        handleHighlightShop(shop.properties.shop_id)}}>
                    <Row className="align-items-center"> 
                        <Col xs ="2" lg="5" xl="5" className="loc-shop-img">
                            <img src="/database/another/z1.jpg" alt="shop" />
                        </Col>
                        <Col xs ="10" lg="7" xl="7" className="loc-shop-info">
                            <h5>{shop.properties.name}</h5>
                            <div className="loc-shop-info-row">
                                <span>{shop.properties.city}</span><br/>
                                <span>{shop.properties.address}</span><br/>
                            </div>
                            <div className="loc-shop-info-row">
                                <span>Call Us: {shop.properties.call}</span><br/>
                                <span>Hours: {shop.properties.hours}</span><br/>
                            </div>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))
        }
    </ListGroup>
);

export default LocationsList;