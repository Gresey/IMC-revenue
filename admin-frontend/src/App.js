import React, { Component } from "react";
import GetData from "./GetData";
import HeatMap from "./HeatMap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heatData: [],
    };
  }

  handleDataFetch = (data) => {
    this.setState({ heatData: data });
  };

  render() {
    return (
      <div className="App">
        <GetData onDataFetch={this.handleDataFetch} />
        <HeatMap heatData={this.state.heatData} />
      </div>
    );
  }
}

export default App;
