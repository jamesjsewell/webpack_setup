import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import example from './example/example_module.js'

const Index = () => {
  return <div className="hello">Hello React! <div className="world">hello world</div></div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

