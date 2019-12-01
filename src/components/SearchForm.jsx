import React from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const SearchForm = (
    {allItems, searchQuery, searchFunc, visible, searchInput, onFocus, onBlur, onSubmit, highlightText} ) => (
    <>
        <InputGroup  className="head-search align-items-center">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <i className='fas fa-search'></i>
                </InputGroupText>
            </InputGroupAddon>
            <Input
                value={searchQuery}
                onChange={e => searchFunc(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onSubmit}
                innerRef={searchInput}
            />
        </InputGroup>
        <ul className="head-search-list" style={{display: visible && searchQuery? 'table':'none'}}>
        {   
            allItems.slice(0, 10).map(item => (
                <li key={item.id} className="search-list-item">
                    <Link to={`/gallery/${item.category}/${item.id}`}>
                        { highlightText(searchQuery, item.type, item.product, item.brand, item.title) }
                    </Link>
                </li>))                       
        }
        {
            !allItems.length
            ?
            <h6>Sorry, No Matches Found :-(</h6>
            :
            null
        }
        </ul> 
    </>
);

export default SearchForm;