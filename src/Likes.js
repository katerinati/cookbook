import React, { Component } from "react"
import "./likes.css"

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

export default Likes