const initialState = {
    sortBy: 'all',
    filterBy: 'all',
    searchBy: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload,
            };
        case 'SET_SEARCH':
            return {
                ...state,
                searchBy: action.payload,
            };
        default:
            return state;
    }
}