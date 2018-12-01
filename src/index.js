import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import './configs/firebase';
import { firebaseReducer } from './reducers/firebase-reducer';

import './styles.css';
import App from './app';

// Step 1
const rootReducer = combineReducers({
    database: firebaseReducer
});

// Step 2
const preloadedState = {
    database: {}
};

// Step 3
const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
);

// Step 4
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
