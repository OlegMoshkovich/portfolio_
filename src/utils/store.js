import { createStore } from 'redux';
import reducer from '..reducers';


const store = createStore(reducer,
    // the second argument allows the use of the redux devtools if it exists, if it does not exist just give it a random function
    typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
        window.__REDUX_DEVTOOLS_EXTENSION__() :
        f => f);

export default store;