import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import '../src/styles/theme.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import store from './components/redux/store';
import { Provider } from "react-redux";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);

