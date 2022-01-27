import React, { Component } from "react";
import "./Tally.scss";
import axios from "axios";
import heMan from "../../assets/images/other/heMan.jpg";
import no0 from "../../assets/animation/no0.png";
import no1 from "../../assets/animation/1.png";
import no2 from "../../assets/animation/no2.png";
import no3 from "../../assets/animation/no4.png";
import no4 from "../../assets/animation/no3.png";
import no5 from "../../assets/animation/no5.png";
import no6 from "../../assets/animation/no6.png";
import no7 from "../../assets/animation/no7.png";
import no8 from "../../assets/animation/no8.png";
import tree from "../../assets/animation/tree.gif";



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
    if(this.props.location==="bottom") return (
      <div className="tally">
        <div className="tally__row">
          <p className="tally__head">

        
        
            {`TALLY :${this.state.tally}`}/9
            {/* {` Mandatory Tally:${this.state.mandatoryTally}`}/3 */}
         
         
          </p>  {this.state.tally === 9 ? (
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
        </div>
        </div>



)
if(this.props.location==="top") return (


<div className="tally">
        {this.state.tally === 0 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={no0}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}

{this.state.tally === 1 ? (
          <div className="tally__popup">
            {/* <img
              className="tally__image"
              src={no1}
              alt="descriptive text"
            ></img> */}
          </div>
        ) : (
          ""
        )}

{this.state.tally === 2 ? (
          <div className="tally__popup">
            {/* <img
              className="tally__image"
              src={no2}
              alt="descriptive text"
            ></img> */}
          </div>
        ) : (
          ""
        )}

{/* {this.state.tally === 3 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={tree}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )} */}

{this.state.tally === 3 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={no3}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}

{this.state.tally === 4 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={no4}
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
              src={no5}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}

{this.state.tally === 6 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={tree}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}




        {this.state.tally === 7 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={no7}
              alt="descriptive text"
            ></img>
          </div>
        ) : (
          ""
        )}

{this.state.tally === 8 ? (
          <div className="tally__popup">
            <img
              className="tally__image"
              src={no8}
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
