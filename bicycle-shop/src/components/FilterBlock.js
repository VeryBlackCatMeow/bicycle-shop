import React from 'react';
import { Button, CustomInput, Collapse } from 'reactstrap';

const FilterBlock = ({handleFilterToggle, filterToggle, setFilterFunc, filterBlock, filterBy}) => {
    const blockArrow =!filterToggle ? 'down' : 'right';
    return  filterBlock && filterBlock.list.length>1
            ?
            <div className="filt-block">
                <Button className="filt-button" block color="primary"
                                    name={filterBlock.name} onClick={handleFilterToggle}>
                    <span className="filt-name">{filterBlock.name}</span>
                    <span className="filt-arrow"><i className={blockArrow}></i></span>
                </Button>
                <Collapse isOpen={filterToggle}>
                    <div onChange={ e => setFilterFunc(e.target)}>
                        {         
                            filterBlock.list.map( (checkbox, index) => 
                                    <CustomInput key={index} id={checkbox} 
                                                type="checkbox" name={filterBlock.name}
                                                value={checkbox} label={checkbox}
                                                /*checked={filterBy[filterBlock.name][checkbox]}*/
                                                /*checked={ filterBy[filterBlock.name].some( i => i===checkbox ) }*/
                                    />)
                        }
                    </div> 
                </Collapse>
            </div>
            :
            null
}

export default FilterBlock;
