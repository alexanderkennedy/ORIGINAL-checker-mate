import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from "axios";
import Checkbox from "../Checkbox/Checkbox";
import purplePlayIcon from "../../assets/images/icons/purplePlayIcon.svg";
import "./MainList.scss";
import { Link } from 'react-router-dom';

const playerHeight = "84.375"
const playerWidth = "150"
// const MainListData = [
//     {
//       "mediaType": "t",
//       "min": "5",
//       "url": "https://www.treesprintplanting.com/expectations.html",
//       "title": "Tree-Sprint Policy on Bullying and Harassment",
//       "priority": "5",
//       "watched":false
//     },
//     {
//       "mediaType": "t",
//       "min": "5",
//       "url": "https://www.worksafebc.com/en/health-safety/hazards-exposures/bullying-harassment",
//       "title": "Explanation of Legal definition of Bullying and Harassment",
//       "priority": "5",
//       "watched":false
//     },
//     {
//       "mediaType": "v",
//       "min": "7",
//       "url":"https://www.youtube.com/embed/497RHaz_ajg",
//       // "url": <iframe width={playerWidth} height={playerHeight} src="https://www.youtube.com/embed/497RHaz_ajg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
//       "title": "Video account of bullying from WorkSafe BC",
//       "priority": "4",
//       "watched":false
//     }
//   ]


class MainList extends Component {
  state = { 
    checked: false, 
    aBetterWorkplace: []
   }

  componentDidMount() {
    this.getABetterWorkplace()
    this.getFirstAid()
    // this.getFitness()
    // All this function will  do is get the data and put it into the state
    // axios 
    //   .get('http://localhost:8080/lists')
    //   .then((res) => {
    //     this.setState({
    //       aBetterWorkplace: res.data
    //     })
    //     // console.log("a better workplace", res.data)
    //   })
    //   .catch((err) => console.log(err));
  }

 getABetterWorkplace(){ 
  axios 
  .get('http://localhost:8080/lists')
  .then((res) => {
    this.setState({
      aBetterWorkplace: res.data
    })
    // console.log("a better workplace", res.data)
  })
  .catch((err) => console.log(err));
 }

 getFirstAid(){
   console.log("hello, I am get first aid")
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
              {/* <tr>
                <td><img src={purplePlayIcon} alt="purple play icon" /></td>
                <td>7</td>
                <td>https://www.summitplanting.com/expectations.html</td>
                <td>Tree-Sprint Policy on Bullying and Harassment</td>
                <td>MANDATORY</td>
              </tr> */}
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
            </table>

            {/* <div className="youtube">
            <iframe width={playerWidth} height={playerHeight} src="https://www.youtube.com/embed/497RHaz_ajg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
          </div>
        );
    }
}

export default MainList;