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
        className={`${this.state.isChecked ? "clicked" : "unclick"}`}
        type="checkbox"
        {...this.props}
      />
    );
  }
}
export default Checkbox;

// const Checkbox = (props) =>
// (
//   <input className="rotate-scale-up" type="checkbox" {...props} />
// );
// export default Checkbox;
