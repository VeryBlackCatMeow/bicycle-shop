import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import { sortByABC } from '../funcLibrary/index.js'
import { setFilterAction, resetFiltersAction  } from '../actions/index.js'
import FilterBlock  from '../components/FilterBlock';
import '../styles/filter.css'

class Filter extends Component {
    constructor(props) {
        super(props)
        const {resetFiltersFunc, extraProps} = this.props;

                                // all toggles are true
        this.state = {    
            blockToggle: true,
            menuToggle: true,  
            filterToggles: extraProps.filters.reduce((o, key) => ( {...o, [key]: true} ), {}),
        };

        this.reset = {
            searchBy: '',
            sortBy: 'all',
            filterBy: extraProps.filters.reduce((o, key) => ( {...o, [key]:[]} ), {})
        }

        resetFiltersFunc(this.reset);
    }

    componentDidMount = () => {
        axios.get('/database/homemenu.json').then(({ data }) => {       
            this.setState({ menu: data});
        });
    }

    /*componentDidUpdate = (prevProps) => {
        if (this.props.extraProps !== prevProps.extraProps) {
            const {resetFiltersFunc, extraProps} = this.props;

                                // reset all toggles (set true)
            this.setState({   
                blockToggle: true,
                menuToggle: true,  
                filterToggles: extraProps.filters.reduce((o, key) => ( {...o, [key]: true} ), {})
            });

                                // reset all filters(set default settings)
            resetFiltersFunc(this.reset);
        }
    }*/

    handleBlockToggle = () => {
        this.setState({ 
            blockToggle: !this.state.blockToggle
        });
    }

    handleMenuToggle = () => {
        this.setState({ 
            menuToggle: !this.state.menuToggle
        });
    }

    handleFilterToggle = (e) => {
        let target = e.target;
        while (target !== this) {
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
    
    render() {
        const { setFilterFunc, filterBy, extraProps, items } = this.props
        const filterBlocks =  extraProps.filters.map( i => {
            let x = sortByABC( [...new Set([].concat(...items.map(item =>item[i])))] ) //array of checkboxes names/values from items
            return {
             name: i, 
             list: x
            }          //собираем все возможные значения фильтров (фильтры из extraProps, значения из items)
        }   
        );
        const blockArrow =!this.state.blockToggle ? 'down' : 'right';
        const menuArrow =!this.state.menuToggle ? 'down' : 'right';

        return(
            <>
            <div className="filt-block">
                <Button className="filt-button" block color="success" onClick={this.handleMenuToggle}>
                    <span className="filt-name">Gallery Menu</span>
                    <span className="filt-arrow"><i className={menuArrow}></i></span>
                </Button>
                <Collapse isOpen={this.state.menuToggle}>
                    {
                        this.state.menu
                        ?
                        this.state.menu.map((line) => (<h6 key={line.id}><NavLink to={line.link} activeClassName="active">{line.menu}</NavLink></h6>))
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
                            filterBy = {filterBy}
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
    resetFiltersFunc: obj => dispatch(resetFiltersAction (obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);