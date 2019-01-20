const initialState = {
    isReady: false,
    items: null,
    sortBy: 'standart',
    filterBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BIKES':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
            case 'SET_SORT':
            return {
                ...state,
                sortBy: action.payload,
                isReady: true
            };
            case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload,
                isReady: true
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        
        default:
            return state;
    }
}