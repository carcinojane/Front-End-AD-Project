import React, { Component } from "react";
import DepRepDistriTable from "../Components/DepRepDistriTable";
import DepRepCollectTable from "../Components/DepRepCollectTable";

class DepRepDistriCollectionList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (this.props.showDistribution) {
      return (
        <div className="inventoryBody">
          <h1>Distribution</h1>
          <DepRepDistriTable />
        </div>
      );
    }
    return (
      <div className="inventoryBody">
        <h1>Collection</h1>
        <DepRepCollectTable
          department={this.props.department}
          collectionInfo={this.props.collectionInfo}
        />
      </div>
    );
  }
}

export default DepRepDistriCollectionList;
