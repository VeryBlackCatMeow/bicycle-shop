import React from 'react';
import { Button, Input, Collapse, Label, FormGroup } from 'reactstrap';

const FilterBlock = ({handleFilterToggle, filterToggle, setFilterFunc, filterBlock, filterBy}) => {
    const blockArrow =!filterToggle ? 'arrow-down' : 'arrow-right';
    return  filterBlock && filterBlock.list.length>1
            ?
            <div className="filt-checkboxes filt-box">
                <Button className="filt-button" block color="primary"
                                    name={filterBlock.name} onClick={handleFilterToggle}>
                    <span className="filt-name">{filterBlock.name}</span>
                    <span className="filt-arrow"><i className={blockArrow}></i></span>
                </Button>
                <Collapse isOpen={filterToggle}>
                    <FormGroup check onChange={ e => setFilterFunc(e.target) }>
                        {         
                            filterBlock.list.map( (checkbox, index) => 
                                    <Label check key={index}>
                                        <Input type="checkbox"
                                               name={filterBlock.name} value={checkbox}
                                                /*checked={filterBy[filterBlock.name][checkbox]}*//>
                                        {checkbox}
                                    </Label>
                            )
                        }
                    </FormGroup>
                </Collapse>
            </div>
            :
            null
}

export default FilterBlock;
