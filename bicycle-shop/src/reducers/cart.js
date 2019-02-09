const initialState = {
    items: [],
    lastItem: null,
    quantity: {}
};

const decrease = (items, action) => {
    for(var i = items.length-1; i >= 0; i--) {
        var item = items[i];
        if(action === item.sku) {
            items.splice(i, 1);
            break;
        }
    }
    return items;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
                lastItem: action.payload,
                quantity: isNaN(state.quantity[action.payload.sku])
                    ?{ ...state.quantity, [action.payload.sku]: 1 }
                    :{ ...state.quantity, [action.payload.sku]: state.quantity[action.payload.sku]+1 },
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.sku !== action.payload),
                quantity: { ...state.quantity, [action.payload]: 0 },
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: decrease(state.items, action.payload),
                quantity: { ...state.quantity, [action.payload]: state.quantity[action.payload]-1 },
            }
        case 'SET_QUANTITY':
            return {
                ...state,
            quantity: { ...state.quantity, [action.payload.name]: +(action.payload.value)},
            };
        default:
            return state;
    }
}