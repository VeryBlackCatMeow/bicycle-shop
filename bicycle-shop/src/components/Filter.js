import React from 'react';
import { Button, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//import { sortingBy } from '../containers/Showcase';

const Filter = ({ /*setFilterFunc, filterBy,*/ handleFilterToggle, filterToggles, handleCheck, extraProps, items }) => {
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
         list: sorting( [...new Set([].concat(...items.map(item =>item[i])))] )
        }
    ));

    
    return(
        filterBlocks.map( (block, index) => <FilterBlock key={index}  block={block} 
                                        handleFilterToggle={handleFilterToggle}
                                        filterToggles={filterToggles} handleCheck={handleCheck}
                                        /> 
        )
    );
};

const FilterBlock = ({handleFilterToggle, filterToggles, handleCheck, block}) => (
    <div>
        <Button color="primary" name={block.tab} onClick={handleFilterToggle}>{block.tab}:</Button>
        {
          filterToggles[block.tab]                    
          ? block.list.map( (checkbox, index) => <div onChange={handleCheck}><FilterList key={index} checkbox={checkbox} /></div>  )     
          : null
        } 
    </div>);

const FilterList = ({checkbox}) => (                 //filterBy   //checked={filterBy==='checked'}
    <CustomInput id={checkbox} type="checkbox" value={checkbox} label={checkbox}/>
);

const mapStateToProps = ({productreducers}) => ({
    items: productreducers.items,
});

export default withRouter(connect(mapStateToProps/*, mapDispatchToProps*/)(Filter));