/*export const setBikesAction = (bike) => {
    alert ("now bike is:" + bike.title)
    return {
        type: 'SET_BIKES',
        payload: bike
    }
};*/

export const setBikesAction = bike => ({
    type: 'SET_BIKES',
    payload: bike
});

export const setSortAction = sort => ({
    type: 'SET_SORT',
    payload: sort
});

export const setFilterAction = filter => ({
    type: 'SET_FILTER',
    payload: filter
});

export const setSearchAction = query => ({
    type: 'SET_SEARCH',
    payload: query
});

export const addToCartAction = obj => ({
    type: 'ADD_ITEM_TO_CART',
    payload: obj
});

export const removeFromCartAction = id => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: id
});

//export default setBikesAction;
