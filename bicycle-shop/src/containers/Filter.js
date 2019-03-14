import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { setFilterAction } from '../actions/index.js'
import { connect } from 'react-redux';
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
        this.setState({ 
            blockToggle: !this.state.blockToggle,
        });
    }

    handleFilterToggle = (e) => {
        var target = e.target;
        while (target !== this) {
            if (target.className === 'btn btn-primary btn-block') {
                const name=target.name;
                this.setState({ 
                    filterToggles: {...this.state.filterToggles, 
                                                [name]: !this.state.filterToggles[name] }
                });
            return;
            }
        target = target.parentNode;
        }
    }

    /*handleFilterToggle = ({target: {name}}) => {
        this.setState({ 
                    filterToggles: {...this.state.filterToggles, 
                                                [name]: !this.state.filterToggles[name] }
                });
    }*/

    sorting = (items) => items.slice().sort( (a , b) => {
                        if (a >= b) return 1;
                        else return -1;
                        });

    render() {
        const { setFilterFunc, extraProps, items } = this.props
        //console.log(extraProps);
        const filterBlocks =  extraProps.filters.map( i => ( 
            {
             name: i, 
             list: this.sorting( [...new Set([].concat(...items.map(item =>item[i])))] ) //array of checkboxes names/values from items
            }          //собираем все возможные значения фильтров (фильтры из extraProps, значения из items)
        ));
        const blockArrow =!this.state.blockToggle ? 'down' : 'right';
        return(
            <>
                <Button className="filt-button" block color="primary" onClick={this.handleBlockToggle}>
                    <span className="filt-name">Filters</span>
                    <span className="filt-arrow"><i className={blockArrow}></i></span>
                </Button>
                {
                    this.state.blockToggle
                    ? filterBlocks.map( (filterBlock, index) => <FilterBlock 
                        key={index} filterBlock={filterBlock} 
                        handleFilterToggle={this.handleFilterToggle}
                        filterToggle={this.state.filterToggles[filterBlock.name]}
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