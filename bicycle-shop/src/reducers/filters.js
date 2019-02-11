const initialState = {
    sortBy: 'all',
    filterBy: [],
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
                filterBy: [ ...state.filterBy, { filterName: action.payload.name, value: action.payload.value} ],
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

