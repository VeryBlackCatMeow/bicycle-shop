import React, { Component } from 'react';
//import axios from 'axios';
import { Row, Col, Button } from 'reactstrap';

import Showcase from './Showcase';
import Filter from '../components/Filter.js';
import Sort from './Sort.js';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blockToggle: true,
            //filterToggles: {type: true, brand: true, wheelSizes: true}
            filterToggles: {}
         };
    }


    config = (props) => {
        const bikes = { heightImg: '200px', filters: ['type', 'brand', 'wheelSizes'] };
        const rent = { heightImg: '450px', filters: ['type', 'brand', 'wheelSizes'] };
        
        switch (props) {
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
    
    /*componentDidMount = () => {
        const { setBikesFunc } = this.props;
        axios.get('/database/bikesdatabase.json').then(({ data }) => {
        setBikesFunc(data);        
        });
    }*/

    handleBlockToggle = () => {
        this.setState({ blockToggle: !this.state.blockToggle });
    }

    handleFilterToggle = ({target: {name}}) => {
        this.setState({ filterToggles: {...this.state.filterToggles, 
                                        [name]: !this.state.filterToggles[name] }}
        );
    }
    
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

    handleCheck = ({target: {value, name, checked}}) => {
       const { setFilterFunc } = this.props;
       setFilterFunc(value);
    }

    filteringBy = (items, field, filterBy) => {
        if(filterBy==='all'){return items;}
        else {return items.filter(item => item[field]===filterBy);}
    }
    
    render() {
        const extraProps = this.config(this.props.match.params.product);    //тут буду прокидывать все настройки для элементов галлереи
        return (
            <Row className="pr-3"> 
                <Col sm="12" md="2">
                    <Button color="primary" onClick={this.handleBlockToggle}>Filters:</Button>
                    {
                        this.state.blockToggle
                        ? <Filter /*setFilterFunc={setFilterFunc} filterBy={filterBy}*/
                            handleFilterToggle={this.handleFilterToggle} filterToggles={this.state.filterToggles}
                            handleCheck={this.handleCheck} extraProps={extraProps}/> 
                        : null
                    }
                </Col>
                
                <Col sm="12" md="10">
                    <Row>
                        <h3>Bicycles:</h3>
                        <Sort/>
                        <hr/>
                    </Row>    
                    <Row>
                       <Showcase extraProps={extraProps}/>
                    </Row>
                </Col>
            </Row>
        );
    }
}




export default Gallery;