import CssSet from '../lib/CssSet.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home.jsx';
const app = React.createElement(Home, {});
ReactDOM.render(app, document.getElementById('reactroot'));
