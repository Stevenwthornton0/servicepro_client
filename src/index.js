import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCar, faToilet, faHome, faMountain, faPlane, faCut, faCoins, faMobile, faSearch, faNewspaper, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import App from './components/App/App';
import { ServicesProvider } from './contexts/ServicesContext';
import './index.css';

library.add(
    faCar,
    faToilet,
    faHome,
    faMountain,
    faPlane,
    faCut,
    faCoins,
    faMobile,
    faSearch,
    faNewspaper,
    faUserPlus
)

ReactDOM.render(
    <BrowserRouter>
        <ServicesProvider>
            <App />
        </ServicesProvider>
    </BrowserRouter>,
    document.getElementById('root')
);