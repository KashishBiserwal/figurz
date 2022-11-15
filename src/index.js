import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MarvelFilterContextProvider } from './Marvel/marvelFilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MarvelFilterContextProvider>
         <App />
        </MarvelFilterContextProvider>
    </BrowserRouter>
);
