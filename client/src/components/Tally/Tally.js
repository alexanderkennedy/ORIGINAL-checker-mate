import React, { Component } from "react";
import "./Tally.scss";
import axios from "axios";

class Tally extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      tally: this.tally(
        this.props.aBetterWorkplace,
        this.props.firstAid,
        this.props.fitness
      ),
    });
  }
  componentDidUpdate(previousProps) {
    console.log(
      this.tally(
        this.props.aBetterWorkplace,
        this.props.firstAid,
        this.props.fitness
      )
    );
    const currentTally = this.tally(
      this.props.aBetterWorkplace,
      this.props.firstAid,
      this.props.fitness
    );
    const previousTally = this.tally(
      previousProps.aBetterWorkplace,
      previousProps.firstAid,
      previousProps.fitness
    );
    if (currentTally !== previousTally) {
      this.setState({
        tally: currentTally,
      });
    }
  }

  tally = (list1, list2, list3) => {
    let counter = 0;
    list1.forEach((element) => {
      //   console.log("element", element);
      if (element.watched === true) {
        counter++;
      }
    });
    list2.forEach((element) => {
      if (element.watched === true) {
        counter++;
      }
    });
    list3.forEach((element) => {
      if (element.watched === true) {
        counter++;
      }
    });
    return counter;
  };

  // console.log("Total tally: ", tally());
  render() {
    return (
      <div className="tally">
        <tr className="tally__row">
          <th className="tally__head">{`TALLY (WATCHED out of TOTAL ITEMS):${this.state.tally}`}</th>
        </tr>
      </div>
    );
  }
}

export default Tally;
