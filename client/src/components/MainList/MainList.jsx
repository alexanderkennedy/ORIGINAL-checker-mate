import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import purplePlayIcon from "../../assets/images/icons/purplePlayIcon.svg";
import "./MainList.scss";
import { Link } from 'react-router-dom';

const playerHeight = "84.375"
const playerWidth = "150"

class MainList extends Component {
  state = { 
    checked: false, 
    aBetterWorkplace: [],
    firstAid:[]
   }

  componentDidMount() {
    // this.getABetterWorkplace()
    // this.getFirstAid()
    this.getAllLists()
  }

  // Attempt to merge both axios requests...


  getAllLists(){ 
    axios 
    .get('http://localhost:8080/lists/')
    .then((res) => {
      this.setState({
        aBetterWorkplace: res.data.workPlaceData , 
        firstAid: res.data.firstAidData
      })
      // console.log("a better workplace", res.data)
    })
    .catch((err) => console.log(err));
   }

 getABetterWorkplace(){ 
  axios 
  .get('http://localhost:8080/lists/a-better-workplace')
  .then((res) => {
    this.setState({
      aBetterWorkplace: res.data
    })
    // console.log("a better workplace", res.data)
  })
  .catch((err) => console.log(err));
 }

 getFirstAid(){
  axios 
  .get('http://localhost:8080/lists/first-aid')
  .then((res) => {
    this.setState({
      firstAid: res.data
    })
    // console.log("first aid", res.data)
  })
  .catch((err) => console.log(err));
 }
 
handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }
  render() {

    console.log("this.state.aBetterWorkplace", this.state.aBetterWorkplace)
        return (
            <div className="a-better-workplace-list">  
            <table>
              <tr>
                <th>MEDIA TYPE</th>
                <th>TIME IN MINUTES</th>
                {/* <th>SOURCE</th> */}
                <th>TITLE</th>
                <th>PRIORITY</th>
                 <th>WATCHED</th>
              </tr>
             {this.state.aBetterWorkplace.map((val, key) => 
                <tr key={key}>
                  <td>{val.mediaType}<td><img src={purplePlayIcon} alt="purple play icon" /></td></td>
                  <td>{val.min}</td>
                  <td><a href={val.url} target="_blank">{val.title}</a></td>
                  <td>{val.priority}</td>
                  <td> <Checkbox
            // checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          /></td>
                </tr>
              )}    
 
              <tr>
                <th>MEDIA TYPE</th>
                <th>TIME IN MINUTES</th>
                {/* <th>SOURCE</th> */}
                <th>TITLE</th>
                <th>PRIORITY</th>
                 <th>WATCHED</th>
              </tr>







               {this.state.firstAid.map((val, key) => 
                <tr key={key}>
                  <td>{val.mediaType}<td><img src={purplePlayIcon} alt="purple play icon" /></td></td>
                  <td>{val.min}</td>
                  <td><a href={val.url} target="_blank">{val.title}</a></td>
                  <td>{val.priority}</td>
                  <td> <Checkbox
            // checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          /></td>
                </tr>
              )}    
            </table>

            {/* <div className="youtube">
            <iframe width={playerWidth} height={playerHeight} src="https://www.youtube.com/embed/497RHaz_ajg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
          </div>
        );
    }
}

export default MainList;