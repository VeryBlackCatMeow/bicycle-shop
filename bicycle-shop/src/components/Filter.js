import React from 'react';
import { Button, CustomInput } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//import { sortingBy } from '../containers/Showcase';

const Filter = ({ /*setFilterFunc, filterBy,*/ handleFilterToggle, filterToggles, handleCheck, extraProps, items }) => {
    //onClick={setFilterFunc.bind(this, !filterBy)}
/*    <div>
        
        <Button color="primary" name="type" onClick={handleFilterToggle}>Type:</Button>
        {
        //filterBy   //checked={filterBy==='checked'}
        filterToggles.type                    
        ? <div onChange = {handleCheck}>
            <CustomInput id="c" type="checkbox" value="Business" label="Business"/>
            <CustomInput id="d" type="checkbox" value="Economy" label="Economy"/>
            <CustomInput id="e" type="checkbox" value="Sport" label="Sport"/>
            <CustomInput id="f" type="checkbox" value="Gourmet" label="Gourmet"/>
            <CustomInput id="b" type="checkbox" value="Future" label="Future"/>
        </div> 
        : null
        } 
        
         <Button color="primary" name="brand" onClick={handleFilterToggle}>Brand:</Button>
        {
        filterToggles.brand                   
        ? <div onChange = {handleCheck}>
            <CustomInput id="z" type="checkbox" value="Alfa" label="Alfa"/>
            <CustomInput id="x" type="checkbox" value="Dil" label="Dil"/>
            <CustomInput id="y" type="checkbox" value="Master" label="Master"/>
            <CustomInput id="t" type="checkbox" value="Sport" label="Urban"/>
            <CustomInput id="u" type="checkbox" value="ZE Best" label="ZE Best"/>
          </div> 
        : null
        } 
    </div>*/
    const sorting = (items) => {
        return items.slice().sort( (a , b) => {
                        if (a > b) return 1;
                        if (a < b) return -1;
        });
    };
    const filterBlocks =  extraProps.filters.map( i => (
        {
         filterBarItem: i, 
         filterCheckboxes: sorting( [...new Set([].concat(...items.map(item =>item[i])))] )
        }
    ));

    filterBlocks.map( (block, index) => <FilterBlock/>
    );
    

    return(
     <div>
        
        <Button color="primary" name="type" onClick={handleFilterToggle}>Type:</Button>
        {
        //filterBy   //checked={filterBy==='checked'}
        filterToggles.type                    
        ? <div onChange = {handleCheck}>
            <CustomInput id="z" type="checkbox" value="Business" label="Business"/>
            <CustomInput id="x" type="checkbox" value="Economy" label="Economy"/>
            <CustomInput id="y" type="checkbox" value="Sport" label="Sport"/>
            <CustomInput id="t" type="checkbox" value="Gourmet" label="Gourmet"/>
            <CustomInput id="u" type="checkbox" value="Future" label="Future"/>
        </div> 
        : null
        } 
    </div>
    );
};

const FilterBlock = () => (
    <div>
        About Us!!!!
    </div>);

const FilterList = () => (
    <div>
        About Us!!!!
    </div>);



const mapStateToProps = ( 
    {productreducers}) => ({
    items: productreducers.items,
});

export default withRouter(connect(mapStateToProps/*, mapDispatchToProps*/)(Filter));