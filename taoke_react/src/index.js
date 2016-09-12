import React from 'react';
import ReactDOM from 'react-dom';
import Taoke from './taoke';
import './css/common.css';
import {b_rem} from './js/common_rem'
b_rem() //运行rem 核心js
ReactDOM.render(
  <Taoke />,
  document.getElementById('root')
);
