import React from 'react';
import { render } from 'react-dom';
// import { hot } from 'react-hot-loader/root';
const root = document.getElementById('app');
import App from "./index.jsx";
import HookTest from "./hookTest.jsx";
const load = () => render((
    <>
        <HookTest/>
        <App/>
    </>
), root);
load()
// hot(load());