import React from 'react';
import { Button, CustomInput } from 'reactstrap';


const Filter = ({ setFilterFunc, filterBy, handToggle2, filterToggle  }) => (
    //onClick={setFilterFunc.bind(this, !filterBy)}
    <div>
        <Button color="primary" onClick={handToggle2}>Классификация:</Button>
        {
        //filterBy
        filterToggle                    
        ? <div>
            <CustomInput id="a" type="checkbox" value="all" label="All"/>
            <CustomInput id="b" type="checkbox" value="cheap" label="Cheap"/>
            <CustomInput id="c" type="checkbox" value="business" label="Business"/>
            <CustomInput id="d" type="checkbox" value="economy" label="Economy"/>
            <CustomInput id="e" type="checkbox" value="services" label="Services"/>
            <CustomInput id="f" type="checkbox" value="gourment" label="Gourment"/>
        </div> 
        : null} 
    </div>
);

export default Filter;