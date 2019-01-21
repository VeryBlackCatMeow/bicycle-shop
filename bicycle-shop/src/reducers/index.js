import { combineReducers } from 'redux';
import bikesreducers from './bikes.js';
import filtersreducers from './filters.js';
import cartreducers from './cart.js';

export default combineReducers({
    bikesreducers,
    filtersreducers,
    cartreducers
});
