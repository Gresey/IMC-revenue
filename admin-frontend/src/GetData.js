import React, { Component } from "react";

class GetData extends Component {
  componentDidMount() {
    this.fetchHeatData();
  }

  fetchHeatData = async () => {
    try {
      const response = await fetch("/mockHeatData.json");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      this.props.onDataFetch(data); // Pass the fetched data to the callback function
    } catch (error) {
      console.error("Error fetching the heat data:", error);
    }
  };

  render() {
    return null; // This component does not render anything
  }
}

export default GetData;
