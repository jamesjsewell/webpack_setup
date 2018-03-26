import React from "react";
import ReactDOM from "react-dom";
import './style.scss';
import example from './example/example_module.js'

const Index = () => {
  return <div>Hello React! !</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

