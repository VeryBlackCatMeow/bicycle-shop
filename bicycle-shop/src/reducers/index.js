import { combineReducers } from 'redux';
import bikesreducers from './bikes.js';
import cartreducers from './cart.js';

export default combineReducers({
    bikesreducers,
    cartreducers
});
