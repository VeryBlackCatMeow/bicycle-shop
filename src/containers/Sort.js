import React from 'react';
import { connect } from 'react-redux';

import { setSortAction } from '../actions/index.js'
import SortBar from '../components/SortBar';

const Sort = ( {setSortFunc, sortBy} ) => { 
    return( <SortBar setSortFunc={setSortFunc} sortBy={sortBy} /> ); 
}

const mapStateToProps = ( { filtersreducers }) => ({
    sortBy: filtersreducers.sortBy,
    searchBy: filtersreducers.searchBy,
});

const mapDispatchToProps = (dispatch) => ({
    setSortFunc: sort => dispatch(setSortAction(sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);