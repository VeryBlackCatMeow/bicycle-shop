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
        <Container>
            <Row style={{backgroundColor: 'yellow'}}> 
                <Col xs="3" lg="2"  style={{backgroundColor: 'grey'}}>
                    <Filter extraProps={extraProps}/> 
                </Col>
                    
                <Col xs="9" lg="10"  style={{backgroundColor: 'green'}}>
                    <h3 className="product-category">{props.match.params.category}</h3>
                    <Row style={{backgroundColor: 'yellow'}}>
                        <Sort/>
                    </Row>
                    <Row>  
                        <Showcase extraProps={extraProps}/>
                    </Row>  
                </Col>
            </Row>
        </Container>
    );
}

/*
<Row> 
    <Showcase extraProps={extraProps}/>
</Row>
*/


export default Gallery;

     /*handleFilterToggle = ({target: {name}}) => {
        this.setState(
            prevState => ({ filterToggles: { 
                            ...prevState.filterToggles, 
                            [name]: !prevState.filterToggles[name]
            }})
        );
    }*/

    /*handleFilterToggle = ({target: {name}}) => {
        this.setState( { filterToggles:
            isNaN(this.state.filterToggles[name])
            ?{ ...this.state.filterToggles, [name]: true } 
            :{ ...this.state.filterToggles, [name]: !this.state.filterToggles[name] } 
        });
    }*/