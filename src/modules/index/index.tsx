import * as React from "react";
import { render } from "react-dom";
import RouterPage from "./routers";
const root = document.getElementById("app");
const load = () =>
    render(
        <>
            <RouterPage />
        </>,
        root
    );
load();
