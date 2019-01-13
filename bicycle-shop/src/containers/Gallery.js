import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import { setBikesAction, setSortAction } from '../actions/index.js'
import Menu from '../components/Menu.js';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter.js';
import Sort from '../components/Sort.js';

class Gallery extends Component {
    componentDidMount() {
        const { setBikesFunc } = this.props;
        axios.get('/database/bikesdatabase.json').then(({ data }) => {
        setBikesFunc(data);        
        });
    }

    render() {
        const { isReady, items, setSortFunc, sortBy } = this.props;
        return (
            <Container>
                <Menu/>
                <Row>
                    <Col sm="12" md="2">
                        <Filter/>
                    </Col>
                    <Col sm="12" md="10">
                        <Row>
                            <h3>Bicycles:</h3>
                            <Sort setSortFunc={setSortFunc} sortBy={sortBy}/>
                            <hr/>
                        </Row>    
                        <Row>
                        {!isReady
                            ? 'Loading'
                            : items.map( (item, id) => (<ProductCard key={id} {...item}/>))
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({bikesreducers}) => ({
    items: bikesreducers.items, 
    isReady: bikesreducers.isReady,
    sortBy: bikesreducers.sortBy 
                //items, isReady==props for Gallery 
                //sortBy==props for Sort
                //bikesreducers from allreducers.  
               //items from reducer bikes 
});

const mapDispatchToProps = (dispatch) => ({
    setBikesFunc: bike => dispatch(setBikesAction(bike)),
    setSortFunc: sort => dispatch(setSortAction(sort))
             //setBikesFunc==props for Gallery 
             //setSortFunc==props for Sort
             //bike==from Actions
             // setBikesAction(bike)== action from '../actions/index.js'
});


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);