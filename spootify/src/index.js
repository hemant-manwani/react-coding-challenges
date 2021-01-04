import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';

ReactDOM.render(
  <CoreLayout>
    <Routes />
  </CoreLayout>,
  document.getElementById('root')
);
