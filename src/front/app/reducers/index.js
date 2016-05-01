import { combineReducers } from 'redux';
import challenges from './challenges';
import categories from './categories';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    challenges,
    categories,
    routing: routerReducer
});
