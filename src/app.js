import ReactDOM  from 'react-dom';
import React from 'react';
import { Router, browserHistory, hashHistory} from 'react-router';
import { Routes } from './components/Routes/index.jsx';

ReactDOM.render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById('root')
)
