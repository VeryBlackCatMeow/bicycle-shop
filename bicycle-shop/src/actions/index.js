/*export const setBikesAction = (bike) => {
    alert ("now bike is:" + bike.title)
    return {
        type: 'SET_BIKES',
        payload: bike
    }
};*/

export const setBikesAction = bike => ({
    type: 'SET_BIKES',
    payload: bike
});

export const setSortAction = sort => ({
    type: 'SET_SORT',
    payload: sort
});

export const setFilterAction = filter => ({
    type: 'SET_FILTER',
    payload: filter
});

//export default setBikesAction;
