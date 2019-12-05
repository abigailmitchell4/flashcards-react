import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);

