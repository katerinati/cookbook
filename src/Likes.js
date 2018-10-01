import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./likes.css"


const likesContainer = document.querySelector("#likes-container");

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0
    };
    this.changeLikeNumberOnClick = this.changeLikeNumberOnClick.bind(this)
  }

  changeLikeNumberOnClick() {
      this.setState({
        like: this.state.like +1
        }
      )
  }
  render() {
    return(
      <div>
          <button onClick={this.changeLikeNumberOnClick}>Я ТУТ</button>
          likes: <span>{this.state.like}</span>
      </div>
    )
  }
}

ReactDOM.render(
  <Likes />,
  likesContainer
);