const initialState = {
    items: [],
    //lastItem: null,
    quantity: {}
};

const decrease = (items, action) => {
    for(var i = items.length-1; i >= 0; i--) {
        var item = items[i];
        if(action === item.id) {
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
                quantity: isNaN(state.quantity[action.payload.id])
                    ?{ ...state.quantity, [action.payload.id]: 1 }
                    :{ ...state.quantity, [action.payload.id]: state.quantity[action.payload.id]+1 },
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                quantity: { ...state.quantity, [action.payload]: 0 },
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: decrease(state.items, action.payload),
                quantity: { ...state.quantity, [action.payload]: state.quantity[action.payload]-1 },
            }
        default:
            return state;
    }
}