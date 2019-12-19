import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';




const Application = () => {
    return (
        <div>hello</div>
        // <Router>
        //     <Portfolio path="/" />
        //     <Context path="context" />
        // </Router>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));

serviceWorker.unregister();
