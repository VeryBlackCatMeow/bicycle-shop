import React from 'react';
import { Button, CustomInput } from 'reactstrap';

const FilterBlock = ({handleFilterToggle, filterToggle, setFilterFunc, filterBlock}) => {
    const blockArrow =!filterToggle ? 'down' : 'right';
    /**for(var i=0; i<filterBlocks.length; i++) {
            
        } */
    return (
    <div className="mt-2" style={{backgroundColor: 'grey'}}>
        <Button block color="primary" name={filterBlock.name} onClick={handleFilterToggle}>
            <span className="filt-name">{filterBlock.name}</span>
            <span className="filt-arrow"><i className={blockArrow}></i></span>
        </Button>
        <div onChange={e=>setFilterFunc(e.target)}>
            {
                
            filterToggle && filterBlock.list.length>1 ///THERE IS A BUG--Error in console           
            ? filterBlock.list.map( (checkbox, index) => <CustomInput key={index} id={checkbox} 
                                                        type="checkbox" name={filterBlock.name} 
                                                        value={checkbox} label={checkbox}/> )    
            : null
            }
        </div> 
    </div>
);}

export default FilterBlock;
