const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BIKES':
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}