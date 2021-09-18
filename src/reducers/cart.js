import { decrease } from '../funcLibrary/index.js'

const initialState = { 
    items: [],
    quantity: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
                quantity: isNaN(state.quantity[action.payload.id])
                    ?{ ...state.quantity, [action.payload.id]: 1 }
                    :{ ...state.quantity, [action.payload.id]: state.quantity[action.payload.id]+1 }
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                quantity: { ...state.quantity, [action.payload]: 0 }
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: decrease(state.items, action.payload),
                quantity: { ...state.quantity, [action.payload]: state.quantity[action.payload]-1 }
            };

            case 'ADD_ALL_ITEMS':
                return {
                    ...state,
                    items: action.payload.items,
                    quantity: action.payload.quantity
                };
        default:
            return state;
    }
}