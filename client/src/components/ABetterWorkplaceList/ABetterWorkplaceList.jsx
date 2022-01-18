import React, { Component } from 'react';
import { render } from 'react-dom';
import Checkbox from "../Checkbox/Checkbox";
import purplePlayIcon from "../../assets/images/icons/purplePlayIcon.svg";
import "./ABetterWorkplaceList.scss";

const playerHeight = "84.375"
const playerWidth = "150"
const betterWorkplaceData = [
    {
      "mediaType": "t",
      "min": "5",
      "url": "https://www.treesprintplanting.com/expectations.html",
      "title": "Tree-Sprint Policy on Bullying and Harassment",
      "priority": "5",
      "watched":false
    },
    {
      "mediaType": "t",
      "min": "5",
      "url": "https://www.worksafebc.com/en/health-safety/hazards-exposures/bullying-harassment",
      "title": "Explanation of Legal definition of Bullying and Harassment",
      "priority": "5",
      "watched":false
    },
    {
      "mediaType": "v",
      "min": "7",
      "url": <iframe width={playerWidth} height={playerHeight} src="https://www.youtube.com/embed/497RHaz_ajg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
      "title": "Video account of bullying from WorkSafe BC",
      "priority": "4",
      "watched":false
    }
  ]


class ABetterWorkplaceList extends Component {
  state = { checked: false }
  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
  }
  render() {
        return (
            <div className="a-better-workplace-list">  
            <table>
              <tr>
                <th>MEDIA TYPE</th>
                <th>TIME IN MINUTES</th>
                <th>SOURCE</th>
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
             {betterWorkplaceData.map((val,key) => 
                <tr key={key}>
                  <td>{val.mediaType}</td>
                  <td>{val.min}</td>
                  <td>{val.url}</td>
                  <td>{val.title}</td>
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

export default ABetterWorkplaceList;