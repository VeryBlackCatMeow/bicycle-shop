import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { sortByABC } from '../funcLibrary/index.js'
import { setFilterAction, resetFiltersAction  } from '../actions/index.js'
import FilterBlock  from '../components/FilterBlock';
import '../styles/filter.css'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {    
            blockToggle: true,
            menuToggle: true,  
            filterToggles: {},
            filtersList: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.filtersList !== props.filtersList) {
            return {
                filterToggles: props.filtersList.reduce((o, key) => ( {...o, [key]: true} ), {}), // all toggles are true
                filtersList: props.filtersList
            };
          }
        else return null;
    }

    componentDidMount = () => {
        axios.get('/database/homemenu.json')
            .then(({ data }) => {       
                this.setState({ menu: data});
            })
            .catch(error => console.log(error));

            const {resetFiltersFunc, filtersList} = this.props;

            let reset = {
                sortBy: 'all',
                filterBy: filtersList.reduce((o, key) => ( {...o, [key]:[]} ), {})
            }
           resetFiltersFunc(reset);

    }

    /*componentDidUpdate = (prevProps) => {
        if (this.props.filtersList !== prevProps.filtersList) {
            const {resetFiltersFunc, filtersList} = this.props;

                                // reset all toggles (set true)
            this.setState({   
                blockToggle: true,
                menuToggle: true,  
                filterToggles: filtersList.reduce((o, key) => ( {...o, [key]: true} ), {})
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
        const { setFilterFunc, filterBy, filtersList, items } = this.props;
        const filterBlocks =  filtersList.map( filterName => {
            let filterCheckboxes = sortByABC( [...new Set([].concat(...items.map(item =>item[filterName])))] ) //create an array of checkboxes names/values from items
            return {
             name: filterName, 
             list: filterCheckboxes
            }          //take existing filter values(filters from filtersList, values from items)
        });

        const blockArrow =!this.state.blockToggle ? 'arrow-down' : 'arrow-right';
        const menuArrow =!this.state.menuToggle ? 'arrow-down' : 'arrow-right';

        return(
            <>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));