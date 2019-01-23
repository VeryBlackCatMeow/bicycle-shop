import React, { Component } from 'react';

import axios from 'axios';
import { Row, Col, Button, Spinner } from 'reactstrap';



import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter.js';
import Sort from '../components/Sort.js';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blockToggle: true,
            filterToggles: {type: true, brand: true}
         };
        this.handleBlockToggle = this.handleBlockToggle.bind(this);
        this.handleFilterToggle = this.handleFilterToggle.bind(this);
        this.filteringBy = this.filteringBy.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        const { setBikesFunc } = this.props;
        axios.get('/database/bikesdatabase.json').then(({ data }) => {
        //setBikesFunc(data.filter(item => (item.type===filterBy)));       
        setBikesFunc(data);      
        });
    } 
    
    /*componentDidMount = () => {
        const { setBikesFunc } = this.props;
        axios.get('/database/bikesdatabase.json').then(({ data }) => {
        setBikesFunc(data);        
        });
    }*/

    handleBlockToggle = () => {
        this.setState({ blockToggle: !this.state.blockToggle });
    }
                //object in state
    /*let clone = Object.assign({}, this.state.filterToggles);    //creating copy of object
    clone.name = 'someothername';                               //updating value
    this.setState({clone});*/
    
    handleFilterToggle = ({target: {name}}) => {
        this.setState(
            prevState => ({ filterToggles: { 
                            ...prevState.filterToggles, 
                            [name]: !prevState.filterToggles[name]
            }})
        );
    }

    handleCheck = ({target: {value, name, checked}}) => {
       const { setFilterFunc } = this.props;
       setFilterFunc(value);
    }

    

    filteringBy = (items, field, filterBy) => {
        if(filterBy==='all'){return items;}
        else {return items.filter(item => item[field]===filterBy);}
    }
    

    render() {
        const { items, setSortFunc, sortBy, setSearchFunc, searchBy, addToCartFunc, itemCount} = this.props;
            return (
                <Row>
                    <Col sm="12" md="2">
                        <Button color="primary" onClick={this.handleBlockToggle}>Filters:</Button>
                        {
                            this.state.blockToggle
                            ? <Filter /*setFilterFunc={setFilterFunc} filterBy={filterBy}*/
                            handleFilterToggle={this.handleFilterToggle} filterToggles={this.state.filterToggles}
                            handleCheck={this.handleCheck}/>
                            : null
                        }
                    </Col>
                    <Col sm="12" md="10">
                        <Row>
                            <h3>Bicycles:</h3>
                            <Sort setSortFunc={setSortFunc} sortBy={sortBy}
                            setSearchFunc={setSearchFunc} searchBy={searchBy}/>
                            <hr/>
                        </Row>    
                        <Row>
                        {
                            !items.length
                            ? <Spinner size="sm" color="primary">LOADING &nbsp;</Spinner>
                            : items.map( (item, id) => (<ProductCard key={id} {...item} addToCartFunc={addToCartFunc} itemCount={itemCount}/>))
                             // this.filteringBy(items, "type", filterBy).map( (item, id) => (<ProductCard key={id} {...item}/>))
                        }
                        </Row>
                    </Col>
                </Row>
        );
    }
}




export default Gallery;