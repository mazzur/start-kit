import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import storeEnhancers from './enhancers';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from '../reducers';

export default () => {
    const state = createStore(
        reducers,
        storeEnhancers
    );

    const history = syncHistoryWithStore(hashHistory, state);

    return {
        state,
        history
    };
};
