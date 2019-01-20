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
            filterToggles: {type: true, brand: true}
         };
        this.handleBlockToggle = this.handleBlockToggle.bind(this);
        this.handleFilterToggle = this.handleFilterToggle.bind(this);
        this.sortingBy = this.sortingBy.bind(this);
        this.filteringBy = this.filteringBy.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        const { setBikesFunc, filterBy } = this.props;
        axios.get('/database/bikesdatabase.json').then(({ data }) => {
        /*setBikesFunc(data.filter(item => (item.type===filterBy)));        
        });*/
        //setBikesFunc(this.filteringBy(data, "type", filterBy));  
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

    sortingBy = (items, sortBy) => {
        switch(sortBy) {
            case 'all':
            return items.concat().sort( (a , b) => {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;});
                
            case 'high':
            return items.sort( (a , b) => {
                    if (a.price < b.price) return 1;
                    if (a.price > b.price) return -1;});
                
            case 'low':
            return items.sort( (a , b) => {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;});
                
            case 'name':
            return items.sort( (a , b) => {
                    if (a.title > b.title) return 1;
                    if (a.title < b.title) return -1;});
                
            case 'avg':
                return items; 
            default:
                return items;        
        }
      }

    filteringBy = (items, field, filterBy) => {
        if(filterBy==='all'){return items;}
        else {return items.filter(item => item[field]===filterBy);}
      }
    

    render() {
        const { isReady, items, setSortFunc, sortBy, filterBy } = this.props;
        this.sortingBy(items, sortBy);
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
                            <Sort setSortFunc={setSortFunc} sortBy={sortBy}/>
                            <hr/>
                        </Row>    
                        <Row>
                        {
                            !isReady
                            ? 'Loading'
                            : this.filteringBy(items, "type", filterBy).map( (item, id) => (<ProductCard key={id} {...item}/>))
                        }
                        </Row>
                    </Col>
                </Row>
        );
    }
}




export default Gallery;