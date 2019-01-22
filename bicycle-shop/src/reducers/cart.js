const initialState = {
    items: [
        /*{
            "id": 0,
            "sku": 12064273040195392,
            "product": "Bicycle",
            "title": "ZE Best U-0",
            "description": "Godlike vehicle",
            "type": "Business",
            "brand": "ZE Best",
            "wheelSizes": ["26", "27.5", "29"],
            "price": 2999.99,
            "currencyFormat": "$",
            "img": "http://localhost:3000/database/img/business01.jpg"
          },
          {
            "id": 1,
            "sku": 12064273040195392,
            "product": "Bicycle",
            "title": "Urbanbike U-1",
            "description": "Cheap&Nice",
            "type": "Economy",
            "brand": "Urban",
            "availableSizes": ["26"],
            "price": 19.99,
            "currencyFormat": "$",
            "img": "http://localhost:3000/database/img/eco01.jpg"
          },
          {
            "id": 2,
            "sku": 12064273040195392,
            "product": "Bicycle",
            "title": "Girlsenjoyer Dil-25",
            "description": "Faster, Harder",
            "type": "Sport",
            "brand": "Dil",
            "availableSizes": ["26", "27.5"],
            "price": 899.99,
            "currencyFormat": "$",
            "img": "http://localhost:3000/database/img/sport01.jpg"
          }*/
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}