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

//export default setBikesAction;
