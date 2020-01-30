import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './containers/Portfolio';
import PortfolioBuilding from './containers/PortfolioBuilding';

import Context from './containers/Context'
import * as serviceWorker from './serviceWorker';
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import store from './utils/store'
import Experiment from './containers/Experiment'
import Outerlbas from './containers/outerlabs'

const Application = () => {
    return (
        <Provider store={store}>
            <Router>
                <Portfolio path="/" />
                <PortfolioBuilding path="/aec" />
                <Context path="/context" />
                <Experiment path="/experiment" />
                <Outerlbas path="/outerlabs" />
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
