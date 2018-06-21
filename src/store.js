import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/items';

const store = createStore(
    combineReducers({
        items: itemReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);


export default store;