import React from 'react';
import { Button, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import FilterBlock  from '../components/FilterBlock';

const Filterbar = (
    {filterBy, setFilterFunc, menu, filterBlocks, menuToggle, blockToggle, filterToggles,
        handleMenuToggle, handleBlockToggle, handleFilterToggle, menuArrow, blockArrow}) => (

    <div className="filter-bar">
        <div className="filt-categories filt-box" >
            <Button className="filt-button" block color="success" onClick={handleMenuToggle}>
                <span className="filt-name">Category</span>
                <span className="filt-arrow"><i className={menuArrow}></i></span>
            </Button>
            <Collapse isOpen={menuToggle}>
                <h6><NavLink to='/gallery/allItems' activeClassName="active">All Items</NavLink></h6>
                {
                    menu
                    ?
                    menu.map(line => (
                        <h6 key={line.id}>
                            <NavLink to={line.link} activeClassName="active">{line.menu}</NavLink>
                        </h6>))
                    :
                    null
                }
            </Collapse>
        </div>
        <div className="filt-list filt-box">
            <Button className="filt-button" block color="success" onClick={handleBlockToggle}>
                <span className="filt-name">Filters</span>
                <span className="filt-arrow"><i className={blockArrow}></i></span>
            </Button>
            <Collapse isOpen={blockToggle}>
                {
                    filterBlocks.map( (filterBlock, index) => <FilterBlock 
                        key={index} filterBlock={filterBlock} 
                        handleFilterToggle={handleFilterToggle}
                        filterToggle={filterToggles[filterBlock.name]}
                        filterBy = {filterBy}
                        setFilterFunc={setFilterFunc}/> )
                }
            </Collapse>
        </div>
    </div>
);

export default Filterbar;