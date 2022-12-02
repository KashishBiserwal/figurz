import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { MarvelFilterContextProvider } from './Marvel/marvelFilterContext';
import { DcFilterContextProvider } from './DC/DcFilterContext';
import { MenFilterContextProvider } from './Men/menFilterContext';
import { CartProvider } from './Cart/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MarvelFilterContextProvider>
        <DcFilterContextProvider>
        <MenFilterContextProvider>
        <CartProvider>
            <App />
        </CartProvider>
        </MenFilterContextProvider>
        </DcFilterContextProvider>
        </MarvelFilterContextProvider>
    </BrowserRouter>
);

