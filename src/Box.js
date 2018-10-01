import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./Box.css"

const boxContainer = document.querySelector("#box-container");

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "small",
    };
  }
  changeSize() {
    if(this.state.size == "small") {
      this.setState({size: "large"});

    } else {
      this.setState({size: "small"});

    }
  }
  render() {
    if (this.state.size == "small") {
      return (
        <div onClick={this.changeSize.bind(this)} className="box" style={ {backgroundColor: this.props.color} }></div>
      )
    } else {
      return (
        <div onClick={this.changeSize.bind(this)} className="largeBox" style={ {backgroundColor: this.props.color} }></div>
      )
    }
  };
}


ReactDOM.render(
  <div>
    <Box color="red" />
    <Box color="blue" />
    <Box color="yellow" />
  </div>,
  boxContainer
);