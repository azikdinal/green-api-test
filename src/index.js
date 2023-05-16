import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)
