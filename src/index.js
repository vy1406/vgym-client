import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
