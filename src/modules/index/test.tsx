import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const HookTest = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Test1</Link>
                    </li>
                    <li>
                        <Link to="/app">app</Link>
                    </li>
                    <li>
                        <Link to="/hookTest">hookTest</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HookTest;
