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
import bottom0 from "../../assets/images/bottomTally/bottom0A.png";
import bottom2 from "../../assets/images/bottomTally/bottom2A.png";
import bottom4 from "../../assets/images/bottomTally/bottom4A.png";
import bottom6 from "../../assets/images/bottomTally/bottom6A.png";
import bottom8 from "../../assets/images/bottomTally/bottom8.PNG";
import bottom9 from "../../assets/images/bottomTally/bottom9.PNG";

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

  render() {
    console.log(this.props);
    if (this.props.location === "bottom")
      return (
        <div className="tally">
          <div className="tally__row">
            <p className="tally__head">{`TALLY :${this.state.tally}`}/9</p>

            {this.state.tally === 0 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom0}
                  alt="tiny tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 1 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom0}
                  alt="tiny tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 2 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom2}
                  alt="tiny tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 3 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom2}
                  alt="small tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 4 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom4}
                  alt="small tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 5 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom6}
                  alt="young tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 6 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom6}
                  alt="young tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 7 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom6}
                  alt="bigger tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 8 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom8}
                  alt="bigger tree"
                ></img>
              </div>
            ) : (
              ""
            )}

            {this.state.tally === 9 ? (
              <div className="bottom-tally__popup">
                <img
                  className="bottom-tally__image"
                  src={bottom9}
                  alt="bigger tree with shovel in front of it"
                ></img>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    if (this.props.location === "top")
      return (
        <div className="tally">
          {this.state.tally === 0 ? (
            <div className="tally__popup--0">
              <img
                className="tally__image"
                src={no0}
                alt="image of helicopter in a field"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 1 ? (
            <div className="tally__popup--1">
              <img
                className="tally__image"
                src={no1}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 2 ? (
            <div className="tally__popup--2">
              <img
                className="tally__image"
                src={no2}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 3 ? (
            <div className="tally__popup--3">
              <img
                className="tally__image"
                src={no3}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 4 ? (
            <div className="tally__popup--4">
              <img
                className="tally__image"
                src={no4}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 5 ? (
            <div className="tally__popup--5">
              <img
                className="tally__image"
                src={no5}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 6 ? (
            <div className="tally__popup--6">
              <img
                className="tally__image"
                src={tree}
                alt="image of dancing Tree"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 7 ? (
            <div className="tally__popup--7">
              <img
                className="tally__image"
                src={no7}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 8 ? (
            <div className="tally__popup--8">
              <img
                className="tally__image"
                src={no8}
                alt="image of helicopter in a field with trees growing in front"
              ></img>
            </div>
          ) : (
            ""
          )}

          {this.state.tally === 9 ? (
            <div className="tally__popup--9">
              <img
                className="tally__image"
                src={heMan}
                alt="Image of He-Man"
              ></img>
              Thank you for taking the time to read the material. Please return
              to this material for reference before your contract,and we'll see
              you at camp this Spring! --The Tree Sprint Team.
            </div>
          ) : (
            ""
          )}
        </div>
      );
  }
}

export default Tally;
