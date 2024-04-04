import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
console.log('REACT_APP_ENV:', process.env.REACT_APP_ENV);