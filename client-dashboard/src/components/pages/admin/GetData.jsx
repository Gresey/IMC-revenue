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
      // Assuming ward number is in the data
      const wardNumber = data.wardNo; // Adjust this based on your data structure
      this.postWardNumber({ wardNo: wardNumber });
    } catch (error) {
      console.error("Error fetching the heat data:", error);
    }
  };

  postWardNumber = async (data) => {
    try {
      const response = await fetch("/api/wardNumber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const responseData = await response.json();
      console.log("Response from POST request:", responseData);
    } catch (error) {
      console.error("Error posting the ward number:", error);
    }
  };

  render() {
    return null; // This component does not render anything
  }
}

export default GetData;
