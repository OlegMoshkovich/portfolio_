import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Portfolio } from './containers/portfolio'
import { Router } from '@reach/router'




const Application = () => {
    return (
        <Router>
            <Portfolio path="/" />
        </Router>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
