import React from 'react';
import {Container, Row, Col } from 'reactstrap';

import Showcase from './Showcase';
import Filter from '../containers/Filter.js';
import Sort from './Sort.js';

const Gallery = (props) => {
    const config = (product) => {
        const bikes = { heightImg: '200px', filters: ['type', 'brand', 'wheelSizes'] };
        const rent = { heightImg: '450px', filters: ['type', 'brand', 'wheelSizes', 'title'] };
        
        switch (product) {
            case 'bikes':
                return bikes;
            case 'rent':
                return rent;
            case 'components':
                return bikes;
            default:
                return bikes;
        }
    }
    
    const extraProps = config(props.match.params.product);//тут буду прокидывать все настройки для элементов галлереи   
    
    return (
        <Container>
            <Row className="pr-3"> 
                <Col sm="12" md="2">
                    <Filter extraProps={extraProps}/> 
                </Col>
                    
                <Col sm="12" md="10">
                    <Row>
                        <h3>Bicycles:</h3>
                        <Sort/>
                        <hr/>
                    </Row>    
                        <Showcase extraProps={extraProps}/>
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