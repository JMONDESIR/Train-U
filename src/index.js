import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Trainer from './components/Trainer'
import './index.css';
import 'tachyons'
import 'tachyons/css/tachyons.css'


ReactDOM.render(
  <Router>
    <Trainer />
  </Router>
  , document.getElementById('root'))
