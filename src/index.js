import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Map from './containers/Map'
import Context from './containers/Context'
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router"



const Application = () => {
    return (
        <Router>
            <App path="/" />
            <Map path="map" />
            <Context path="context" />
        </Router>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
