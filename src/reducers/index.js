import { combineReducers } from 'redux';

import productreducers from './products.js';
import filtersreducers from './filters.js';
import cartreducers from './cart.js';
import searchreducers from './search.js';
import paginationreducers from './pagination.js';

export default combineReducers({
    productreducers,
    filtersreducers,
    cartreducers,
    searchreducers,
    paginationreducers
});
