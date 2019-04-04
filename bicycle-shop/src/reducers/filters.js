const initialState = {
    searchBy: '',
    sortBy: 'all',
    filterBy: {}, 
    /*filterBy: { type: [], brand: [], wheelSizes: [] }  */  
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
                filterBy: action.payload.checked
                    ?
                    { ...state.filterBy,
                        [action.payload.name]: [...state.filterBy[action.payload.name],
                            action.payload.value] } // добавляем  фильтр(value) в массив в соответстующем свойстве(name) объекта
                    :
                    {...state.filterBy,
                        [action.payload.name]: state.filterBy[action.payload.name].filter(item => 
                            item !== action.payload.value)} // удаляем из свойства объекта ненужный элемент(фильтр) массива
            };
        case 'SET_SEARCH':
            return {
                ...state,
                searchBy: action.payload,
            };
        case 'RESET_FILTERS':
            return {
                ...state,
                searchBy: action.payload.searchBy,
                sortBy: action.payload.sortBy,
                filterBy: action.payload.filterBy,
            };
        default:
            return state;
    }
}

/* { [], [], []}
case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload.checked
                    ?
                    { ...state.filterBy,
                        [action.payload.name]: [...state.filterBy[action.payload.name],
                            action.payload.value] } // добавляем  фильтр(value) в массив в соответстующем свойстве(name) объекта
                    :
                    {...state.filterBy,
                        [action.payload.name]: state.filterBy[action.payload.name].filter(item => 
                            item !== action.payload.value)} // удаляем из свойства объекта ненужный элемент(фильтр) массива
            };
 */

 /** { {}, {}, {} }
   case 'SET_FILTER':
            return {
                ...state,
                filterBy: { ...state.filterBy,
                        [action.payload.name]: {...state.filterBy[action.payload.name], 
                            [action.payload.value]: !state.filterBy[action.payload.name][action.payload.value] }
                }
                   
            };
  */