import React from 'react';
import { Button, CustomInput } from 'reactstrap';

const FilterBlock = ({handleFilterToggle, filterToggle, setFilterFunc, block}) => {
    const blockArrow =!filterToggle ? 'down' : 'right'
    return (
    <div className="mt-2" style={{backgroundColor: 'grey'}}>
        <Button block color="primary" name={block.tab} onClick={handleFilterToggle}>
            <span className="filt-name">{block.tab}</span>
            <span className="filt-arrow"><i className={blockArrow}></i></span>
        </Button>
        <div onChange={e=>setFilterFunc(e.target)}>
            {
            filterToggle            
            ? block.list.map( (checkbox, index) => <CustomInput key={index} id={checkbox} 
                                                        type="checkbox" name={block.tab} 
                                                        value={checkbox} label={checkbox}/> )    
            : null
            }
        </div> 
    </div>
);}

export default FilterBlock;
