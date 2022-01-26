import React, { Component } from "react";
import "./Tally.scss";
import axios from "axios";
import heMan from "../../assets/images/other/heMan.jpg";

class Tally extends Component {
  state = {};
  componentDidMount() {
    this.setState({
      tally: this.tally(
        this.props.aBetterWorkplace,
        this.props.firstAid,
        this.props.fitness
      ),
      mandatoryTally: this.props.mandatoryTallyFunction(
        this.props.aBetterWorkplace
      ),
    });
  }
  componentDidUpdate(previousProps) {
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

    const currentMandatoryTally = this.props.mandatoryTallyFunction(
      this.props.aBetterWorkplace
    );
    const previousMandatoryTally = this.props.mandatoryTallyFunction(
      previousProps.aBetterWorkplace
    );
    if (currentMandatoryTally !== previousMandatoryTally) {
      this.setState({
        mandatoryTally: currentMandatoryTally,
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

  // mandatoryTally = (list1) => {
  //   let mandatoryCounter = 0;
  //   list1.forEach((element) => {
  //     //   console.log("element", element);
  //     if (element.watched === true) {
  //       mandatoryCounter++;
  //     }
  //   });
  //   return mandatoryCounter;
  // };

  // console.log("Total tally: ", tally());
  render() {
    console.log(this.props);
    return (
      <div className="tally">
        <div className="tally__row">
          <p className="tally__head">
            {`TALLY :${this.state.tally}`}/9,
            {` Mandatory Tally:${this.state.mandatoryTally}`}/3
          </p>
        </div>

        {this.state.tally === 7 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={heMan}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}


        {this.state.tally === 5 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={heMan}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}
        {this.state.tally === 9 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={heMan}
              alt="descriptive text"
            ></img>
            Thank you for taking the time to read the material. Please return to
            this material for reference before your contract,and we'll see you
            at camp this Spring! --The Tree Sprint Team.
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Tally;
