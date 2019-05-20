import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Main from './components/Main'
import './index.css';
import 'tachyons'
import 'tachyons/css/tachyons.css'
import history from './history'

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>
  , document.getElementById('root'))
