import firebase from 'firebase/app';
import 'firebase/database';

const dataRef = firebase.database().ref('/');

export const dbActions = {
    fetchData: () => async (dispatch) => {
        dataRef.on('value', (snapshot) => {
            dispatch({
                type: 'FETCH_DATA',
                payload: snapshot.val()
            });
        });
    },
    addData: (data) => async () => {
        dataRef.push().set(data);
    }
};
