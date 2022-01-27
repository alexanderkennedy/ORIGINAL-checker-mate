import React, { Component } from "react";
import "./Checkbox.scss";

class Checkbox extends Component {
  state = {
    isChecked: false,
  };
  handleChange = (e) => {
    this.setState({
      isChecked: e.target.checked,
    });
  };
  render() {
    return (
      <input
        onChange={this.handleChange}
        className={`checkbox ${
          this.state.isChecked ? "clicked active" : "unclick"
        }`}
        type="checkbox"
        {...this.props}
      />
    );
  }
}
export default Checkbox;
