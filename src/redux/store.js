import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {blogReducer}  from './blog/reducer';
import {createAPI} from '../api';

const api = createAPI();
const reducerRoot = combineReducers({
  dataBlog: blogReducer,
});

const enhancer = applyMiddleware(thunk.withExtraArgument(api));
const store = createStore(reducerRoot, composeWithDevTools(enhancer));

export default store;

