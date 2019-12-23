import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './containers/Portfolio';
import Context from './containers/Context'
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import store from './utils/store'

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
