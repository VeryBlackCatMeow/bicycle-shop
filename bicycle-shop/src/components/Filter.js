import React from 'react';
import { Button, CustomInput } from 'reactstrap';


const Filter = ({ /*setFilterFunc, filterBy,*/ handleFilterToggle, filterToggles, handleCheck }) => (
    //onClick={setFilterFunc.bind(this, !filterBy)}
    <div>
        <Button color="primary" name="type" onClick={handleFilterToggle}>Классификация:</Button>
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
    </div>
    
    
);

export default Filter;