import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from "redux-thunk"
import reducer from "./reducer"

const middleware = [thunk]

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const makeStore = context => createStore(reducer, enhancer);

export const wrapper = createWrapper(makeStore, { debug: true });