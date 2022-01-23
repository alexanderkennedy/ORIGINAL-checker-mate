import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import purplePlayIcon from "../../assets/images/icons/purplePlayIcon.svg";
import "./MainList.scss";
import { Link } from "react-router-dom";
import Tally from "../../components/Tally/Tally";

const playerHeight = "84.375";
const playerWidth = "150";

class MainList extends Component {
  state = {
    // whatever you put in state, put in the actual inputs as well. (So names are matched)
    aBetterWorkplace: [],
    firstAid: [],
    fitness: [],
    loading:true,
  };

  componentDidMount() {
    console.log("mounted");
    this.getAllLists();
  }

  getAllLists() {
    axios
      .get("http://localhost:8080/lists/")
      .then((res) => {
        this.setState(
          {
            aBetterWorkplace: res.data.workPlaceData,
            firstAid: res.data.firstAidData,
            fitness: res.data.fitnessData,
            loading:false
          },
          () => console.log(this.state)
        );
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
  };
  
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

  handleCheckboxChange = (e, idToUpdate, listName) => {
    console.log("e.target", e.target);
    e.preventDefault();
    console.log(this.props);
    const updatedABetterWorkplace = {
      watched: e.target.checked,
      listName: listName,
    };
    console.log("updatedABetterWorkplace", updatedABetterWorkplace);
    console.log("idToUpdate", idToUpdate);
    console.log("listName", listName);
    console.log("this.state.firstAid", this.state.firstAid);
    axios
      .put(`http://localhost:8080/lists/${idToUpdate}`, updatedABetterWorkplace)
      .then((res) => {
        this.getAllLists();
      });

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
              <th><img src="" alt="" /> BETTER WORKPLACE</th>
              <th>PRIORITY</th>
              <th>WATCHED</th>
            </tr>
          </thead>
          <tbody className="tbody">
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
                 <Checkbox
                    checked={val.watched}
                    onChange={(e) =>
                      this.handleCheckboxChange(e, val.id, val.listName)
                    }
                  />
                </td>
              </tr>
            ))}
            </tbody>
            {/* BREAK */}
            <tbody>
            <tr className="firstAid">
              <th>MEDIA TYPE</th>
              <th>TIME IN MINUTES</th>
              <th>FIRST AID</th>
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
                    onChange={(e) =>
                      this.handleCheckboxChange(e, val.id, val.listName)
                    }
                  />
                </td>
              </tr>
            ))}
            </tbody>
            {/*  */}
            <tr className="fitness">
              <th>MEDIA TYPE</th>
              <th>TIME IN MINUTES</th>
              <th>FITNESS</th>
              <th>PRIORITY</th>
              <th>WATCHED</th>
            </tr>
            <tbody>
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
                  <Checkbox className=".slide-bck-left"
                    checked={val.watched}
                    onChange={(e) =>
                      this.handleCheckboxChange(e, val.id, val.listName)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="youtube">
            <iframe width={playerWidth} height={playerHeight} src="https://www.youtube.com/embed/497RHaz_ajg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
          
        {this.state.loading ? null : (<Tally
          aBetterWorkplace={this.state.aBetterWorkplace}
          firstAid={this.state.firstAid}
          fitness={this.state.fitness}
        ></Tally>)}
      </div>
    );
  }
}

export default MainList;
