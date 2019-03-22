import React from 'react';
import { Button, CustomInput, Collapse } from 'reactstrap';

/*const FilterBlock = ({handleFilterToggle, filterToggle, setFilterFunc, filterBlock}) => {
    const blockArrow =!filterToggle ? 'down' : 'right';
    return (
    <div className="filt-block" style={{backgroundColor: 'grey'}}>
        <Button className="filt-button" block color="primary" name={filterBlock.name} onClick={handleFilterToggle}>
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

export default FilterBlock;*/


const FilterBlock = ({handleFilterToggle, filterToggle, setFilterFunc, filterBlock}) => {
    const blockArrow =!filterToggle ? 'down' : 'right';

    if (filterBlock.list.length>1) return (
        <div className="filt-block">
            <Button className="filt-button" block color="primary" name={filterBlock.name} onClick={handleFilterToggle}>
                <span className="filt-name">{filterBlock.name}</span>
                <span className="filt-arrow"><i className={blockArrow}></i></span>
            </Button>
            <Collapse isOpen={filterToggle}>
                <div onChange={e=>setFilterFunc(e.target)}>
                    {         
                        filterBlock.list.map( (checkbox, index) => 
                                <CustomInput key={index} id={checkbox} 
                                            type="checkbox" name={filterBlock.name} 
                                            value={checkbox} label={checkbox}/> )
                    }
                </div> 
            </Collapse>
        </div>
    );

    else return null;

}

export default FilterBlock;
