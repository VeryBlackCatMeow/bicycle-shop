const initialState = {
    currentPage: 1,
    itemsPerPage: 6
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };

        case 'SET_ITEMS_PER_PAGE':
            return {
                ...state,
                itemsPerPage: action.payload,
            };
        default:
            return state;
    }
}