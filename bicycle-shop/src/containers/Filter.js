import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import { setFilterAction } from '../actions/index.js'
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import FilterBlock  from '../components/FilterBlock.js';
import '../styles/filter.css'

class Filter extends Component {  //onClick={setFilterFunc.bind(this, !filterBy)}
    constructor(props) {
        super(props);
        const { extraProps } = this.props;
        this.state = { 
            blockToggle: true,
            filterToggles: extraProps.filters.reduce((o, key) => ( {...o, [key]: true} ), {})
         }; // all filterToggles are true
    }

    handleBlockToggle = () => {
        this.setState({ blockToggle: !this.state.blockToggle });
    }


    handleFilterToggle = ({target: {name}}) => {
        this.setState({ filterToggles: {...this.state.filterToggles, 
                                        [name]: !this.state.filterToggles[name] }}
        );
    }

    handleArrowRotate = (e) => {

        var el = e ? e.target : window.event.srcElement;
        el.style.transform = 'rotate(90deg)';
    }
    
    sorting = (items) => items.slice().sort( (a , b) => {
                        if (a >= b) return 1;
                        else return -1;
                        });

    render() {
        const { setFilterFunc, extraProps, items } = this.props
        const filterBlocks =  extraProps.filters.map( i => ( 
            {
             tab: i, 
             list: this.sorting( [...new Set([].concat(...items.map(item =>item[i])))] ) //array of checkboxes names/values from items
            }          //собираем все возможные значения фильтров (фильтры из extraProps, значения из items)
        ));
        //let classes = classnames('span_icon', {active: !this.state.blockToggle });

        return(
            <>
                <Button block color="primary" onClick={this.handleBlockToggle}>
                    <span style={{float: "left"}}>Filters</span>
                    <span /*className={classes}*/ className="span_icon" style={{float: "right"}}>></span>
                </Button>
                {
                    this.state.blockToggle
                    ? filterBlocks.map( (block, index) => <FilterBlock 
                        key={index} block={block} 
                        handleFilterToggle={this.handleFilterToggle}
                        filterToggles={this.state.filterToggles}
                        setFilterFunc={setFilterFunc}/> )
                    : null
                }
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