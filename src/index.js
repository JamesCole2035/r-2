import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomeClass from './Components/WelcomeClass/WelcomeClass';
import WelcomeFunc from './Components/WelcomeFunc/WelcomeFunc';

ReactDOM.render(
  <div className='main'>
    <WelcomeFunc text="ФУНКЦИОНАЛЬНЫЙ" />
    <WelcomeClass text="КЛАССОВЫЙ" />
  </div>,
  document.getElementById('root')
);