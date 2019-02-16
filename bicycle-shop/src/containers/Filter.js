import React from 'react';
import { Button, CustomInput } from 'reactstrap';
import { setFilterAction } from '../actions/index.js'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//import { sortingBy } from '../containers/Showcase';

const Filter = ({ setFilterFunc, filterBy, handleFilterToggle, filterToggles, extraProps, items }) => {
    //onClick={setFilterFunc.bind(this, !filterBy)}
    
    const sorting = (items) => {
        return items.slice().sort( (a , b) => {
                        if (a > b) return 1;
                        if (a < b) return -1;
        });
    };

    const filterBlocks =  extraProps.filters.map( i => ( 
        {
         tab: i, 
         list: sorting( [...new Set([].concat(...items.map(item =>item[i])))] ) //array of checkboxes names/values from items
        }          //собираем все возможные значения фильтров (фильтры из extraProps, значения из items)
    ));

    return(
        filterBlocks.map( (block, index) => <FilterBlock key={index} block={block} 
                                        handleFilterToggle={handleFilterToggle}
                                        filterToggles={filterToggles} setFilterFunc={setFilterFunc}
                                        /> 
        )
    );
};




const FilterBlock = ({handleFilterToggle, filterToggles, setFilterFunc, block}) => (
    <div>
        <Button color="primary" name={block.tab} onClick={handleFilterToggle}>{block.tab}:</Button>
            <div onChange={e=>setFilterFunc(e.target)}>
                {
                filterToggles[block.tab]                    
                ? block.list.map( (checkbox, index) => <FilterList key={index} checkbox={checkbox} name={block.tab}/> )    
                : null
                
                }
            </div> 
    </div>);


const FilterList = ({checkbox, name}) => (                 //filterBy   //checked={filterBy==='checked'}
    <CustomInput id={checkbox} type="checkbox" name={name} value={checkbox} label={checkbox}/>
);



const mapStateToProps = ( {productreducers, filtersreducers} ) => ({
    items: productreducers.items,
    filterBy: filtersreducers.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
    setFilterFunc: filter => dispatch(setFilterAction(filter)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);