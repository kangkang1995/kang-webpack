import React, { useEffect } from "react";
// const merge = require("webpack-merge");
import {baseUrl} from "env";
import doc11 from "@/assets/others/doc11.doc";
const HookTest = () => {
    // var a = 1;
    console.log(baseUrl,'baseUrl')
    const test = () => {
        let b = {
            a: 1,
        };

        return b?.a === 1 ? <div>1111</div> : <div>2222</div>;
    };
    const download = () => {
        // console.log(baseUrl,'baseUrl')
        // window.open(doc11);
    };
    return (
        <div>
            <div onClick={download}>我是react hook444</div>
            <div>{test()}</div>
        </div>
    );
};

export default HookTest;
