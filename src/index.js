import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyAsset from './myAsset/index.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyAsset />, document.getElementById('root'));
registerServiceWorker();