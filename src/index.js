import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './containers/Portfolio';
import Map from './containers/Map'
import Context from './containers/Context'
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router"
import { Provider } from 'react-redux'
import store from '../src/utils/store'



const Application = () => {
    return (
        <Provider store={store} r>
            <Router>
                <Portfolio path="/" />
                <Map path="map" />
                <Context path="context" />
            </Router>
        </Provider>

    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
