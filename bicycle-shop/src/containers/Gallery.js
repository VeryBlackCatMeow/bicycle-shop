import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import Showcase from './Showcase';
import Filter from '../containers/Filter.js';
import Sort from './Sort.js';

const Gallery = (props) => {
    const filtersConfig = (category) => {
        const accessories = { filters: ['product', 'color'] };
        const apparel = { filters: ['product', 'type', 'brand', 'color', 'size'] };
        const backpacks = { filters: ['color', 'capacity'] };
        const bicycles = { filters: ['type', 'brand', 'wheel Size', 'color'] };
        const components = { filters: ['product', 'type', 'brand', 'color'] };
        const news = { filters: ['product'] };
        const rental = { filters: ['type', 'brand', 'wheel Size', 'title'] };
        const sale = { filters: ['product'] };
        const tools = { filters: ['product', 'brand', 'color']};
        
        switch (category) {
            case 'bicycles':
                return bicycles;
            case 'rental':
                return rental;
            case 'accessories':
                return accessories;
            case 'backpacks':
                return backpacks;
            case 'apparel':
                return apparel;
            case 'components':
                return components;
            case 'news':
                return news;
            case 'sale':
                return sale;
            case 'tools':
                return tools;    
            default:
                return bicycles;
        }
    }
    
    const extraProps = filtersConfig(props.match.params.category);//тут буду прокидывать все настройки для элементов галлереи   
    
    return (
        <Container className="gallery">
            <Row> 
                <Col xs="3" lg="2">
                    <Filter extraProps={extraProps}/> 
                </Col>
                <Col xs="9" lg="10">
                    <h3 className="product-category">{props.match.params.category}</h3>
                    <Row>
                        <Sort/>
                    </Row>
                    <Row>  
                        <Showcase /*key={Math.random()}*/ extraProps={extraProps}/>
                    </Row>  
                </Col>
            </Row>
        </Container>
    );
}

export default Gallery;

     /*handleFilterToggle = ({target: {name}}) => {
        this.setState(
            prevState => ({ filterToggles: { 
                            ...prevState.filterToggles, 
                            [name]: !prevState.filterToggles[name]
            }})
        );
    }*/