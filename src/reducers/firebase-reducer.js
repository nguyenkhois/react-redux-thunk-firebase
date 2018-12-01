export const firebaseReducer = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return action.payload; // It returns snapshot.val()
        default:
            return state;
    }
};