import React from "react"
import ReactDOM from "react-dom"
import "./friends.js"

var container = document.querySelector("#container");
var container2 = document.querySelector("#container2");

const element = React.createElement("div",{
  className: "main",
  children: "Hi there",
});

const element2 = <div>Hi world</div>;

console.log(element.props);

ReactDOM.render(element, container);
ReactDOM.render(element2, container2);

const Component = props => <div>{props.children}</div>;

const el = (
  <Component>
  <div>Hello</div>
  </Component>
  );

ReactDOM.render(el, container);