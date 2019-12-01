import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { sortByABC } from '../funcLibrary/index.js'
import { setFilterAction, resetFiltersAction  } from '../actions/index.js'
import FilterBar from '../components/FilterBar';
import '../styles/filter.scss'

class Filter extends Component {
    state = {    
            blockToggle: true,
            menuToggle: true,  
            filterToggles: {}
    };

    componentDidMount = () => {
        axios.get('/database/homemenu.json')
            .then(({ data }) => {       
                this.setState({ menu: data});
            })
            .catch(error => console.log(error));

        this.setFilters();
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            this.setFilters();
        }
    }

    setFilters = () => {
        const {resetFiltersFunc} = this.props;
        const filterList = this.setCategoryList(this.props.match.params.category);
                        // reset all toggles (set true)
        this.setState({   
            blockToggle: true,
            menuToggle: true,  
            filterToggles: filterList.reduce((o, key) => ( {...o, [key]: true} ), {})
        });
                        // reset all filters(set default settings)
        const reset = {
            sortBy: 'all',
            filterBy: filterList.reduce((o, key) => ( {...o, [key]:[]} ), {})
        }
        resetFiltersFunc(reset);
    }

    setCategoryList = (category) => {
        const accessories = ['product', 'color'];
        const apparel = ['product', 'type', 'brand', 'color', 'size'];
        const backpacks = ['color', 'capacity'];
        const bicycles = ['type', 'brand', 'wheel Size', 'color'];
        const components = ['product', 'type', 'brand', 'color'];
        const news = ['product', 'brand'];
        const rental = ['type', 'brand', 'wheel Size', 'title'];
        const sale = ['product', 'brand'];
        const tools = ['product', 'brand', 'color'];
        const allItems = ['product', 'brand', 'type', 'color'];
        
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
            default:
                return allItems;
        }
    }    

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
            if (target.classList.contains('filt-button')) {
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
        const { items } = this.props;
        const filterList = this.setCategoryList(this.props.match.params.category);
        const filterBlocks =  filterList.map( filterName => {
            let filterCheckboxes = sortByABC( [...new Set([].concat(...items.map(item =>item[filterName])))] ) //create an array of checkboxes names/values from items
            return {
             name: filterName, 
             list: filterCheckboxes
            }          //take existing filter values(filters from filterList, values from items)
        });

        const blockArrow =!this.state.blockToggle ? 'arrow-down' : 'arrow-right';
        const menuArrow =!this.state.menuToggle ? 'arrow-down' : 'arrow-right';
        const { setFilterFunc, filterBy } = this.props;

        return(
            <FilterBar
                //filter setup:
                filterBy = {filterBy}
                setFilterFunc={setFilterFunc}
                //category and filter data:
                menu={this.state.menu}
                filterBlocks={filterBlocks}
                //toggles state:
                menuToggle={this.state.menuToggle}
                blockToggle={this.state.blockToggle}
                filterToggles={this.state.filterToggles}
                //toggle handlers:
                handleMenuToggle={this.handleMenuToggle}
                handleBlockToggle={this.handleBlockToggle}
                handleFilterToggle={this.handleFilterToggle}
                //arrows state:
                menuArrow={menuArrow}
                blockArrow={blockArrow}
            />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));