import React, {Component} from "react"


class Input extends Component {
  constructor(props) {
    super(props);
    this.showAlertOnHover = this.showAlertOnHover.bind(this);
  }

  showAlertOnHover() {
    alert("You don't have permission, bitch")
  }

  render() {
    return (
      <div>
        <input onFocus={this.showAlertOnHover} type="text" placeholder="secret field"/>
      </div>
    )
  }
}

export default Input