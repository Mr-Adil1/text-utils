import React from "react";

const Jscode = () => {
  return (
    <div className="bg-dark contsiner p-4 mt-5 d-flex justify-content-between align-items-center">
      <div className="code">
        <div className="d-flex gap-1">
          <span className=" text-primary">const</span>
          <span className=" text-warning">Example</span>
          <span className=" text-white"> = </span>
          <span className=" text-warning">()</span>
          <span className=" text-warning"> {`=>`} </span>
          <span className=" text-primary">{`{`}</span>
        </div>
        <div className="d-flex gap-1">
          <span className=" text-danger"> return </span>
          <span className=" text-primary">Let</span>
          <span className=" text-white">myvar</span>
          <span className=" text-white"> = </span>
          <span className=" text-success">
            {" "}
            'Hello world' <span className="text-white">;</span>{" "}
          </span>
        </div>
        <span className=" text-primary">{`}`}</span>
        <br />
        <br />
        <span className="text-warning">
          Example {`()`} <span className="text-white">;</span>
        </span>
      </div>
      <div className="output bg-white p-5 text-dark">
          <h1>Hello world</h1>
      </div>
    </div>
  );
};

export default Jscode;
