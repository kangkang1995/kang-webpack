import React, {useEffect} from "react";
const merge = require("webpack-merge");

const HookTest = () => {
  var a = 1;
  const test = () =>{
    let b = {
      a:1,
    }
    return b?.a === 1?<div>1111</div>:<div>2222</div>
  }
  return (
      <div>
        <div>我是react hook99999</div>
      <div>{test()}</div>
      </div>
  );
};

export default HookTest
