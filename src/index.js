import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.min.css';
import './index.css';
// import './js/app.js';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
