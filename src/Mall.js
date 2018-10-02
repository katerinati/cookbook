import React, { Component } from "react"
import "./Mall.css"

class Mall extends Component {
  render() {
    return(
      <div>
        {
         <div className={this.props.form == "rounded" ? "rounded" : "squared"}>
           {
            this.props.form == "rounded" ? "я овал" :  "я квадрат"
           }
         </div>
        }
      </div>
    )
  }
}

export default Mall