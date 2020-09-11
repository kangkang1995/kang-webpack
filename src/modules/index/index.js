import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
const root = document.getElementById('app');
import App from "./index.jsx";

const load = () => render((
    <App />
), root);

hot(load());