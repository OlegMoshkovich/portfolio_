import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "../reducers";
import { createTracker } from 'redux-segment';

const tracker = createTracker();

const store = createStore(
    reducer, applyMiddleware(thunk, tracker));

export default store;