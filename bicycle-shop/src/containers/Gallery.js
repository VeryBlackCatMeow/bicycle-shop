import React, { Component } from 'react';

import axios from 'axios';
import { Row, Col, Button } from 'reactstrap';



import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter.js';
import Sort from '../components/Sort.js';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blockToggle: true,
            filterToggle: true
         };
        this.handToggle = this.handToggle.bind(this);
        this.handToggle2 = this.handToggle2.bind(this);
        this.sortingBy = this.sortingBy.bind(this);
    } 
    
    componentWillMount = () => {
        const { setBikesFunc } = this.props;
        axios.get('/database/bikesdatabase.json').then(({ data }) => {
        setBikesFunc(data);        
        });
    }

    handToggle = () => {
        this.setState({ blockToggle: !this.state.blockToggle });
    }
    
    handToggle2 = () => {
        this.setState({ filterToggle: !this.state.filterToggle });
    }

    sortingBy = (items, sortBy) => {
        switch(sortBy) {
            case 'all':
                items.sort(function (a , b) {
                if (a.id > b.id) return 1;
                if (a.id < b.id) return -1;});
                return items;
            case 'high':
                items.sort(function (a , b) {
                if (a.price < b.price) return 1;
                if (a.price > b.price) return -1;});
                return items;
            case 'low':
                items.sort(function (a , b) {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;});
                return items;
            case 'name':
                items.sort(function (a , b) {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;});
                return items;
            case 'avg':
                return items; 
            default:
                return items;        
        }
      }

    render() {
        const { isReady, items, setSortFunc, sortBy, setFilterFunc, filterBy } = this.props;
        this.sortingBy(items, sortBy);
        return (
                <Row>
                    <Col sm="12" md="2">
                        <Button color="primary" onClick={this.handToggle}>Filters:</Button>
                        {
                            this.state.blockToggle
                            ? <Filter setFilterFunc={setFilterFunc} filterBy={filterBy}
                             handToggle2={this.handToggle2} filterToggle={this.state.filterToggle}/>
                            : null
                        }
                    </Col>
                    <Col sm="12" md="10">
                        <Row>
                            <h3>Bicycles:</h3>
                            <Sort setSortFunc={setSortFunc} sortBy={sortBy}/>
                            <hr/>
                        </Row>    
                        <Row>
                        {
                            !isReady
                            ? 'Loading'
                            : items.map( (item, id) => (<ProductCard key={id} {...item}/>))
                        }
                        </Row>
                    </Col>
                </Row>
        );
    }
}




export default Gallery;