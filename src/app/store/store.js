import {createStore , compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Get all reducers
import rootReducer from '../reducers/index';
function configStore(){
    const middlewares = [
        thunk,
    ];
    const store = createStore(rootReducer , applyMiddleware(thunk)); 
    return store;
}

export default configStore;