export const setProductsAction = items => ({
    type: 'SET_PRODUCTS',
    payload: items
});

export const setAllProductsAction = allItems => ({
    type: 'SET_ALL_PRODUCTS',
    payload: allItems
})

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

export const searchQueryAction = serchQuery => ({
    type: 'SET_SEARCH_QUERY',
    payload: serchQuery
});

export const setCurrentPageAction = currentPage => ({
    type: 'SET_CURRENT_PAGE',
    payload: currentPage
});

export const setItemsPerPageAction = itemsPerPage => ({
    type: 'SET_ITEMS_PER_PAGE',
    payload: itemsPerPage
});

export const setIsLoggedInAction = isLoggedIn => ({
    type: 'SET_IS_LOGGED_IN',
    payload: isLoggedIn
});

export const setUserAction = user => ({
    type: 'SET_USER',
    payload: user
});

export const addAllItemsAction = obj => ({
    type: 'ADD_ALL_ITEMS',
    payload: obj
});