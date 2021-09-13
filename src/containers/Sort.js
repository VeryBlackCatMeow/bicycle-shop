import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { setSortAction, setCurrentPageAction } from '../actions/index.js'
import SortBar from '../components/SortBar';

const Sort = ( {setSortFunc, sortBy, setCurrentPageFunc} ) => {

    useEffect(()=> {
        setCurrentPageFunc(1);
    }, [sortBy, setCurrentPageFunc])
    
    return( <SortBar setSortFunc={setSortFunc} sortBy={sortBy} /> ); 
}

const mapStateToProps = ( { filtersreducers }) => ({
    sortBy: filtersreducers.sortBy,
    searchBy: filtersreducers.searchBy,
});

const mapDispatchToProps = (dispatch) => ({
    setSortFunc: sort => dispatch(setSortAction(sort)),
    setCurrentPageFunc: currentPage => dispatch(setCurrentPageAction(currentPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);