const initialState = {
    items: [],
    lastItem: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
                lastItem: action.payload
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.sku !== action.payload)
            };
        default:
            return state;
    }
}