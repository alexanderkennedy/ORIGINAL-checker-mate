import React, { Component } from "react";
import { BsTree } from "react-icons/bs";
import "./Checkbox.scss";
import pepper from "../../assets/images/icons/pepper.png";

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
        className={`checkbox ${this.state.isChecked ? "clicked" : "unclick"}`}
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
