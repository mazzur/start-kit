import proxyquire from 'proxyquire';

describe('reducers entry point', () => {
    let redux,
        reactRouterRedux,
        categoriesReducer,
        challengesReducer,
        sut;

    beforeEach(() => {
        redux = {
            combineReducers: env.stub().returns({})
        };

        reactRouterRedux = {
            routerReducer: {}
        };

        categoriesReducer = {
            default: {}
        };

        challengesReducer = {
            default: {}
        };

        sut = proxyquire('./index', {
            redux,
            './challenges': challengesReducer,
            './categories': categoriesReducer,
            'react-router-redux': reactRouterRedux
        });
    });

    it('should combine application reducers and routing reducers once', () => {
        redux.combineReducers.should
            .calledWith({
                challenges: challengesReducer.default,
                categories: categoriesReducer.default,
                routing: reactRouterRedux.routerReducer
            })
            .and
            .callCount(1);
    });

    it('should return combined reducers', () => {
        sut.default.should.equal(redux.combineReducers());
    });
});

