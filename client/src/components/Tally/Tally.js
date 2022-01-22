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
    // this.tally()
    // console.log(this.state.aBetterWorkplace)
  }
  componentDidUpdate(previousProps) {
    // this.setState({
    //     tally:this.tally()
    // })
    // console.log(previousprops);
    // console.log(previousstate);
    // console.log(this.state.aBetterWorkplace);
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

  // Keep track of counter in state and when counter changes state refreshes.
  // getAllLists() {
  //     axios
  //       .get("http://localhost:8080/lists/")
  //       .then((res) => {
  //           console.log(res)
  //         this.setState(
  //           {
  //             aBetterWorkplace: res.data.workPlaceData,
  //             firstAid: res.data.firstAidData,
  //             fitness: res.data.fitnessData,
  //           },
  //         );
  //         console.log("a better workplace", res.data)
  //       })
  //       .catch((err) => console.log(err));
  //   };
  // let data1 = [

  // ];

  // let data2 = [

  // ];

  // let data3 = [

  // ];

  // // console.log(data1, data2, data3);

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
      <div>
        <tr className="tally-wrap">
          <th>{`TALLY (WATCHED out of TOTAL ITEMS):${this.state.tally}`}</th>
        </tr>
      </div>
    );
  }
}

export default Tally;

//read all the jsons put together
//count the amount of times "true" shows up
//present that number
