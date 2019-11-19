import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { sortByABC } from '../funcLibrary/index.js'
import { setFilterAction, resetFiltersAction  } from '../actions/index.js'
import FilterBlock  from '../components/FilterBlock';
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
        const { setFilterFunc, filterBy, items } = this.props;
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

        return(
            <div className="filter-bar">
            <div className="filt-categories filt-box" >
                <Button className="filt-button" block color="success" onClick={this.handleMenuToggle}>
                    <span className="filt-name">Category</span>
                    <span className="filt-arrow"><i className={menuArrow}></i></span>
                </Button>
                <Collapse isOpen={this.state.menuToggle}>
                    <h6><NavLink to='/gallery/allItems' activeClassName="active">All Items</NavLink></h6>
                    {
                        this.state.menu
                        ?
                        this.state.menu.map((line) => (<h6 key={line.id}><NavLink to={line.link} activeClassName="active">{line.menu}</NavLink></h6>))
                        :
                        null
                    }
                </Collapse>
            </div>
            <div className="filt-list filt-box">
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
            </div>
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