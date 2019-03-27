import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import { setFilterAction } from '../actions/index.js'
import FilterBlock  from '../components/FilterBlock.js';
import '../styles/filter.css'

class Filter extends Component {
    constructor(props) {
        super(props);
        const { extraProps } = this.props;
        this.state = {   
            blockToggle: true,
            menuToggle: true,  
                                // all filterToggles are true
            filterToggles: extraProps.filters.reduce((o, key) => ( {...o, [key]: true} ), {})
         };
    }

    componentDidMount = () => {
        axios.get('/database/homemenu.json').then(({ data }) => {       
            this.setState({ menu: data});
        });
    }

    handleBlockToggle = () => {
        this.setState({ 
            blockToggle: !this.state.blockToggle,
        });
    }

    handleMenuToggle = () => {
        this.setState({ 
            menuToggle: !this.state.menuToggle,
        });
    }

    handleFilterToggle = (e) => {
        let target = e.target;
        while (target !== this) {
            /*if (target.className === 'filt-button btn btn-primary btn-block') {*/
                if (target.className.indexOf('filt-button') >= 0) {
                const name = target.name;
                this.setState({ 
                    filterToggles: {...this.state.filterToggles, 
                                                [name]: !this.state.filterToggles[name] }
                });
            return;
            }
        target = target.parentNode;
        }
    }

    sorting = (items) => items.slice().sort( (a , b) => {
                        if (a >= b) return 1;
                        else return -1;
                        });

    render() {
        const { setFilterFunc, extraProps, items } = this.props
        const filterBlocks =  extraProps.filters.map( i => ( 
            {
             name: i, 
             list: this.sorting( [...new Set([].concat(...items.map(item =>item[i])))] ) //array of checkboxes names/values from items
            }          //собираем все возможные значения фильтров (фильтры из extraProps, значения из items)
        ));
        const blockArrow =!this.state.blockToggle ? 'down' : 'right';
        const menuArrow =!this.state.menuToggle ? 'down' : 'right';
        return(
            <>
            <div className="filt-block">
                <Button className="filt-button" block color="primary" onClick={this.handleMenuToggle}>
                    <span className="filt-name">Gallery Menu</span>
                    <span className="filt-arrow"><i className={menuArrow}></i></span>
                </Button>
                <Collapse isOpen={this.state.menuToggle}>
                    {
                        this.state.menu
                        ?
                        this.state.menu.map((line) => (<h6><NavLink key={line.id} to={line.link} activeClassName="active">{line.menu}</NavLink></h6>))
                        :
                        null
                    }
                </Collapse>
            </div>
            <div className="filt-block">
                <Button className="filt-button" block color="success" onClick={this.handleBlockToggle}>
                    <span className="filt-name">Filters</span>
                    <span className="filt-arrow"><i className={blockArrow}></i></span>
                </Button>
                <Collapse isOpen={this.state.blockToggle}>
                    {
                        filterBlocks.map( (filterBlock, index) => <FilterBlock 
                            key={index} filterBlock={filterBlock} 
                            handleFilterToggle={this.handleFilterToggle}
                            filterToggle={this.state.filterToggles[filterBlock.name]}
                            setFilterFunc={setFilterFunc}/> )
                    }
                </Collapse>
            </div>
            </>
        );
    }
}

const mapStateToProps = ( {productreducers, filtersreducers} ) => ({
    items: productreducers.items,
    filterBy: filtersreducers.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
    setFilterFunc: filter => dispatch(setFilterAction(filter)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);