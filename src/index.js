import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 

ReactDOM.render(
    <React.StrictMode>  
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

