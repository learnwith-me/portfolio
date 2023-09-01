import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/theme.css';
import '../src/styles/index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);
