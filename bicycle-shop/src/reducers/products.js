const initialState = {
    items: []
    /*selectItem: null*/
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
            };

        /*case 'SELECT_PRODUCT':
            return {
                ...state,
                selectItem: action.payload,
            };*/
        default:
            return state;
    }
}