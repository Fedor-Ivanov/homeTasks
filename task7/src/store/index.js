import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
// import { getTables } from './actions/tables'

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));