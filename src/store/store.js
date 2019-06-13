import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "../modules/rootReducerModule";

/**
 * Added thunk middleware for asynchronous updates
 */
const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(reducer, enhancer);

export default store;
