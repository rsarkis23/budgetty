import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import reducer from './userReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))