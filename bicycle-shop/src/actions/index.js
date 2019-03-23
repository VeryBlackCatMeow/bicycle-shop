export const setProductsAction = items => ({
    type: 'SET_PRODUCTS',
    payload: items
});

export const selectProductAction = item => ({
    type: 'SELECT_PRODUCT',
    payload: item
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

export const resetFiltersAction = obj => ({
    type: 'RESET_FILTERS',
    payload: obj
});

export const addToCartAction = obj => ({
    type: 'ADD_ITEM_TO_CART',
    payload: obj
});

export const removeFromCartAction = id => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: id
});

export const decreaseAction = id => ({
    type: 'DECREASE_QUANTITY',
    payload: id
});

