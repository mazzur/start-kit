import proxyquire from 'proxyquire';

describe('store', () => {

    let redux,
        reactRouter,
        reactRouterRedux,
        reducers,
        storeEnhancers,
        result;

    beforeEach(() => {

        redux = {
            createStore: env.stub().returns({}),
            applyMiddleware: env.stub().returns({})
        };

        reactRouter = {
            hashHistory: {}
        };

        reactRouterRedux = {
            syncHistoryWithStore: env.stub().returns({})
        };

        reducers = {
            default: {}
        };

        storeEnhancers = {
            default: {}
        };

        const sut = proxyquire('./store', {
            redux,
            'react-router': reactRouter,
            'react-router-redux': reactRouterRedux,
            '../reducers': reducers,
            './enhancers': storeEnhancers
        }).default;

        result = sut();
    });

    it('should create store for reducers with respective enhancers', () => {
        redux.createStore.should
            .calledWith(
                reducers.default,
                storeEnhancers.default
            )
            .and
            .callCount(1);
    });

    it('should sync history with app store', () => {
        reactRouterRedux.syncHistoryWithStore.should
            .calledWith(reactRouter.hashHistory, redux.createStore())
            .and
            .callCount(1);
    });

    it('should return created app store', () => {
        result.state.should.equal(redux.createStore());
    });

    it('should return synced app history', () => {
        result.history.should.equal(reactRouterRedux.syncHistoryWithStore());
    });

});
