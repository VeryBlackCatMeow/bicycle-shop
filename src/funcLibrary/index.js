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

export const createCookie = (name, value, days)=> {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"   // eslint-disable-line
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }