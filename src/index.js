import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './fonts/Montserrat-Bold.ttf';
import './fonts/Montserrat-Medium.ttf';
import './fonts/icomoon.eot';
import './fonts/icomoon.svg';
import './fonts/icomoon.ttf';
import './fonts/icomoon.woff';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
