import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './util/context';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
