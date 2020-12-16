
import * as React from 'react';
import { render } from 'react-dom';
// import { hot } from 'react-hot-loader/root';
const root = document.getElementById('app');
import App from "./app";
import HookTest from "./hookTest";
const load = () => render((
    <>
        {/* <HookTest/> */}
        <App/>
    </>
), root);
load()
// hot(load());
