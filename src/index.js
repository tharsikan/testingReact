import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import NewApp from './NewApp'
import HighApp from './HighApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HighApp />, document.getElementById('root'));
registerServiceWorker();