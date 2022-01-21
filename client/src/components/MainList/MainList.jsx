import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import purplePlayIcon from "../../assets/images/icons/purplePlayIcon.svg";
import "./MainList.scss";
import { Link } from "react-router-dom";

const playerHeight = "84.375";
const playerWidth = "150";

class MainList extends Component {
  state = {
    // checked: false,
    // aBetterWorkplaceItem1: false,
    // whatever you put in state, put in the actual inputs as well. (So names are matched)
    aBetterWorkplace: [],
    firstAid: [],
    fitness: [],
  };

  componentDidMount() {
    console.log("mounted");
    this.getABetterWorkplace();
    // this.getFirstAid()
    this.getAllLists();
  }

  // Attempt to merge both axios requests...

  getAllLists() {
    axios
      .get("http://localhost:8080/lists/")
      .then((res) => {
        this.setState(
          {
            aBetterWorkplace: res.data.workPlaceData,
            firstAid: res.data.firstAidData,
            fitness: res.data.fitnessData,
          },
          () => console.log(this.state)
        );
        // console.log("a better workplace", res.data)
      })
      .catch((err) => console.log(err));
  }

  getABetterWorkplace() {
    axios
      .get("http://localhost:8080/lists/a-better-workplace")
      .then((res) => {
        console.log(res.data);
        this.setState({
          aBetterWorkplace: res.data,
        });
        // console.log("a better workplace", res.data)
      })
      .catch((err) => console.log(err));
  }
  handleCheckboxChangeBetterWorkplace = (event) => {
    this.setState({ checked: event.target.checked });
    // {console.log("checked: event.target.checked",checked: event.target.checked)}
    const aBetterWorkplace = this.setState({
      checked: aBetterWorkplace.lists.checked,
    });
    // Instead set state for the LIST that's in state and specifically target the WATCHED key.
    // THe WATCHED key is also the true and false... but it's specific
    // axios.put("http://localhost:8080/lists").then((result))
  };
  // axios
  // .put('http://localhost:8080/lists/a-better-workplace')
  // Put request for the checkmark icon.
  // THIS IS A TEST FUNCTION NOT FOR USE
  // function updatePost() {
  //   axios
  //     .put(`${baseURL}/1`, {
  //       title: "Hello World!",
  //       body: "This is an updated post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });

  getFirstAid() {
    axios
      .get("http://localhost:8080/lists/first-aid")
      .then((res) => {
        this.setState({
          firstAid: res.data,
        });
        // console.log("first aid", res.data)
      })
      .catch((err) => console.log(err));
  }

  getFitness() {
    axios
      .get("http://localhost:8080/lists/fitness")
      .then((res) => {
        this.setState({
          fitness: res.data,
        });
        // console.log("fitness", res.data)
      })
      .catch((err) => console.log(err));
  }

  handleCheckboxChange = (e, idToUpdate) => {
    //  this.setState({[e.target.name]:e.target.value})
    console.log("e.target", e.target);

    // START OF COPIED CODE
    e.preventDefault();
    console.log(this.props);
    // const idToUpdate = this.props.match.params.aBetterWorkplaceID;

    const updatedABetterWorkplace = {
      watched: e.target.checked,
    };
    axios.put(
      `http://localhost:8080/lists/${idToUpdate}`,
      updatedABetterWorkplace
    );
    // console
    //   .log("idToupdate"(idToUpdate))
    //   .then(() => this.props.history.push(`/lists`))
    //   .catch((err) => console.log(err));

    //  END OF COPIED CODE
  };
  render() {
    // console.log("this.state.aBetterWorkplace", this.state.aBetterWorkplace)
    return (
      <div className="full-list">
        <table>
          <thead className="header__workplace">
            <tr>
              <th>MEDIA TYPE</th>
              <th>TIME IN MINUTES</th>
              <th>TITLE</th>
              <th>PRIORITY</th>
              <th>WATCHED</th>
            </tr>
          </thead>
          <tbody>
            {this.state.aBetterWorkplace.map((val) => (
              <tr key={val.id}>
                <td>{val.mediaType}</td>
                <td>{val.min}</td>
                <td>
                  <a href={val.url} target="_blank">
                    {val.title}
                  </a>
                </td>
                <td>{val.priority}</td>
                <td>
                  <input
                    type="checkbox"
                    name={val.title}
                    value={val.watched}
                    checked={val.watched}
                    onChange={(e) => this.handleCheckboxChange(e, val.id)}
                  />
                </td>
              </tr>
            ))}
            {/* BREAK */}
            <tr className="firstAid">
              <th>MEDIA TYPE</th>
              <th>TIME IN MINUTES</th>
              <th>TITLE</th>
              <th>PRIORITY</th>
              <th>WATCHED</th>
            </tr>
            {this.state.firstAid.map((val, key) => (
              <tr key={key}>
                <td>{val.mediaType}</td>
                <td>{val.min}</td>
                <td>
                  <a href={val.url} target="_blank">
                    {val.title}
                  </a>
                </td>
                <td>{val.priority}</td>
                <td>
                  {" "}
                  <Checkbox
                    checked={val.watched}
                    onChange={this.handleCheckboxChange}
                  />
                </td>
              </tr>
            ))}
            <tr className="fitness">
              <th>MEDIA TYPE</th>
              <th>TIME IN MINUTES</th>
              <th>TITLE</th>
              <th>PRIORITY</th>
              <th>WATCHED</th>
            </tr>
            {this.state.fitness.map((val, key) => (
              <tr key={key}>
                <td>{val.mediaType}</td>
                <td>{val.min}</td>
                <td>
                  <a href={val.url} target="_blank">
                    {val.title}
                  </a>
                </td>
                <td>{val.priority}</td>
                <td>
                  {" "}
                  <Checkbox
                    checked={val.watched}
                    onChange={this.handleCheckboxChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="youtube">
            <iframe width={playerWidth} height={playerHeight} src="https://www.youtube.com/embed/497RHaz_ajg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
      </div>
    );
  }
}

export default MainList;
