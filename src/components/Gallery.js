import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import Showcase from '../containers/Showcase';
import Filter from '../containers/Filter';
import Sort from '../containers/Sort';

const Gallery = (props) => {

    const filtersConfig = (category) => {
        const accessories = ['product', 'color'];
        const apparel = ['product', 'type', 'brand', 'color', 'size'];
        const backpacks = ['color', 'capacity'];
        const bicycles = ['type', 'brand', 'wheel Size', 'color'];
        const components = ['product', 'type', 'brand', 'color'];
        const news = ['product', 'brand'];
        const rental = ['type', 'brand', 'wheel Size', 'title'];
        const sale = ['product', 'brand'];
        const tools = ['product', 'brand', 'color'];
        const allItems = ['product', 'type'];
        const search = ['product', 'type'];
        
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
            case 'allItems':
                return allItems;
            case 'search':
                    return search;   
            default:
                return bicycles;
        }
    }
    
    const filtersList = filtersConfig(props.match.params.category);//тут буду прокидывать все настройки для элементов галлереи   
    
    return (
        <Container className="gallery">
            <Row> 
                <Col xs="3" lg="2">
                    <Filter filtersList={filtersList}/> 
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

     /*handleFilterToggle = ({target: {name}}) => {
        this.setState(
            prevState => ({ filterToggles: { 
                            ...prevState.filterToggles, 
                            [name]: !prevState.filterToggles[name]
            }})
        );
    }*/