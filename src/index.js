import React from "react"
import ReactDOM from "react-dom"
import "./friends.js"
import "./Box.js"
import Likes from "./Likes"

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
  <div>
    <Component>
      <div>Hello</div>
    </Component>
    <Likes />
  </div>
  );

ReactDOM.render(el, container);