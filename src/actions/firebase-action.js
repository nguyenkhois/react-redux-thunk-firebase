import firebase from 'firebase/app';
import 'firebase/database';

const dataRef = firebase.database().ref('/demo');

/**
 * 1. We must use the composition function because we have been using redux-thunk.
 * 2. Our input data is the first argument.
 * 3. redux-thunk care about the second argument.
 */
export const dbActions = {
    fetchData: () => async (dispatch) => {
        // Dispatch an action with async syntax
        dataRef.on('value', (snapshot) => {
            dispatch({
                type: 'FETCH_DATA',
                payload: snapshot.val()
            });
        });
    },
    
    addData: (data) => async () => {
        // Do not use redux-thunk dispatch when we don'n need it.
        // This is only a normal Firebase syntax.
        dataRef.push().set(data);
    }
};
