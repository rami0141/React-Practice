import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Here is where the app is rendered - component App to the element root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
