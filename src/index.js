import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './containers/Portfolio';
import Context from './containers/Context'
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../src/reducers'
const store = createStore(reducer)

const Application = () => {
    return (
        <Provider store={store}>
            <Router>
                <Portfolio path="/" />
                <Context path="/context" />
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
