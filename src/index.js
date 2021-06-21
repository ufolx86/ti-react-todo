import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap/dist/css/boostrap.min.css'
import TodoApp from './TodoApp';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
