import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/bootstrap_material.min.css'
import '@fortawesome/fontawesome-free/js/all.js';
import App from './Componests/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
