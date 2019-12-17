import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Map from './containers/Map'
import * as serviceWorker from './serviceWorker';
import { Router, Link } from "@reach/router"



const Application = () => {
    return (
        <Router>
            <App path="/" />
            <Map path="map" />
        </Router>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
