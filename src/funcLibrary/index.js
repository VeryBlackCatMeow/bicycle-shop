export const decrease = (items, action) => {
    for(let i = items.length-1; i >= 0; i--) {
        let item = items[i];
        if(action === item.id) {
            items.splice(i, 1);
            break;
        }
    }
    return items;
}

export const unique = (array) => {
    let newArray = [];
    array.filter( item => {
        let i = newArray.findIndex(x => (x.id === item.id));
        if(i <= -1){
        newArray.push({...item});
        }
    return null;
    })
    return newArray
}

export const sortByABC = (items) => items.slice().sort( (a , b) => {
    if (a >= b) return 1;
    else return -1;
    });