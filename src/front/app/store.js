import { createStore, applyMiddleware, combineReducers } from 'redux';
import { hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import challenges from './reducers/challenges';
import categories from './reducers/categories';

export default () => {
    const state = createStore(
        combineReducers({
            challenges,
            categories,
            routing: routerReducer
        }),
        applyMiddleware(thunk)
    );

    const history = syncHistoryWithStore(hashHistory, state);

    return {
        state,
        history
    };
};
