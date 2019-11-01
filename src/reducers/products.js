const initialState = {
    items: [],
    allItems: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
            };

        case 'SET_ALL_PRODUCTS':
            return {
                ...state,
                allItems: action.payload,
            };
        default:
            return state;
    }
}