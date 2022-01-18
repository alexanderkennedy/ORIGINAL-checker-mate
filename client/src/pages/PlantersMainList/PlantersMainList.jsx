import axios from "axios";
import React, { Component } from "react";
import ABetterWorkplaceList from "../../components/ABetterWorkplaceList/ABetterWorkplaceList";
import Nav from "../../components/Nav/Nav";


class PlantersMainList extends Component {
  render() {
    return <div>
      <ABetterWorkplaceList></ABetterWorkplaceList>

    </div>;
  }
}

export default PlantersMainList;
