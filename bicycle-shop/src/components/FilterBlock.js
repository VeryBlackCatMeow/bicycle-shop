import React from 'react';
import { Button, CustomInput } from 'reactstrap';

const FilterBlock = ({handleFilterToggle, filterToggles, setFilterFunc, block}) => (
    <div>
        <Button color="primary" name={block.tab} onClick={handleFilterToggle}>{block.tab}:</Button>
            <div onChange={e=>setFilterFunc(e.target)}>
                {
                filterToggles[block.tab]                    
                ? block.list.map( (checkbox, index) => <CustomInput key={index} id={checkbox} 
                                                            type="checkbox" name={block.tab} 
                                                            value={checkbox} label={checkbox}/> )    
                : null
                }
            </div> 
    </div>
);

export default FilterBlock;



/*
import React from 'react';
import { Button, CustomInput } from 'reactstrap';

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
    </div>
);

const FilterList = ({checkbox, name}) => (
    <CustomInput id={checkbox} type="checkbox" name={name} value={checkbox} label={checkbox}/>
);

export default FilterBlock;

*/
