import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './containers/Portfolio';
import Context from './containers/Context'
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router'





const Application = () => {
    return (
        <Router>
            <Portfolio path="/" />
            <Context path="/context" />
        </Router>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
