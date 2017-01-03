import {combineReducers} from 'redux';
import actions from './actionsReducer';

const rootReducer = combineReducers({
    app : actions
})

export default rootReducer;