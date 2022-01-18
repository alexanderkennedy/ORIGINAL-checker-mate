import React, { Component } from 'react';
import { render } from 'react-dom';
import Checkbox from "../Checkbox/Checkbox";
import purplePlayIcon from "../../assets/images/icons/purplePlayIcon.svg";

const playerHeight = "84.375"
const playerWidth = "150"
const betterWorkplaceData = [
    {
      "mediaType": "t",
      "min": "5",
      "url": "https://www.summitplanting.com/expectations.html",
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
            {/* <div className="list-title-wrapper">
                <h2 className="list-title-wrapper__title">A Better Workplace</h2>
            </div>
           
            <ul className="list-heading-row">
            <li className="list-heading-row__media-type">MEDIA TYPE
            <img src="https://placedog.net/50" alt="picture of dog" /></li>
            <li className="list-heading-row__time">TIME IN MINUTES</li>
            <li className="list-heading-row__url">SOURCE</li>
            <li className="list-heading-row__title">TITLE</li>
            <li className="list-heading-row__priority">PRIORITY</li>
            </ul>
            
            <ul className="list-item-row">
            <li className="list-item-row__media-type">
                <img src="" alt="purple play icon" />
            </li>
            <li className="list-item-row__time">7</li>
            <li className="list-item-row__url">https://www.summitplanting.com/expectations.html</li>
            <li className="list-item-row__title">Tree-Sprint Policy on Bullying and Harrasemnt</li>
            <li className="list-item-row__priority">MANDATORY</li>
            </ul> */}


           
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
            checked={this.state.checked}
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