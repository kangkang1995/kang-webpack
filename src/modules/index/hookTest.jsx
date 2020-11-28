import React from "react";

const HookTest = () => {
  const test = () =>{
    let b = {
      a:1,
    }
    return b?.a === 1?<div>1111</div>:<div>2222</div>
  }
  return (
      <div>
        <div>我是react hook11222</div>
      <div>{test()}</div>
      </div>
  );
};

export default HookTest