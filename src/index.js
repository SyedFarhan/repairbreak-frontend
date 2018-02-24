import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/font-awesome.min.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
