import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWard: null,
    };
    this.mapRef = React.createRef();
    this.heatLayerRef = null;
    this.map = null;
  }

  initializeMap = () => {
    if (!this.map) {
      this.map = L.map(this.mapRef.current).setView([22.7196, 75.8577], 13); // Center on Indore

      // Add a base layer (OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Add polylines to the map
      const addPolyline = (points) => {
        const polyline = new L.Polyline(points, {
          color: "red",
          weight: 3,
          opacity: 0.5,
          smoothFactor: 1,
        });
        polyline.addTo(this.map);
      };

      // Polylines data
      const polylinesData = [
        [
          [22.7196, 75.8577],
          [22.721045836479618, 75.85545044798049],
          [22.718052191606837, 75.85474748645231],
          [22.71822043123735, 75.85782163213281],
          [22.7196, 75.8577],
        ],
        [
          [22.722644069652173, 75.84729175220465],
          [22.719665304253958, 75.84695920255449],
          [22.721852377534788, 75.85196812101357],
          [22.722644069652173, 75.84729175220465],
        ],
        [
          [22.734390263126222, 75.85011628242569],
          [22.743315508056973, 75.85409187506565],
          [22.7417521480478, 75.86363927110455],
          [22.734390263126222, 75.85011628242569],
        ],
        [
          [22.697891628435425, 75.86525052144249],
          [22.701256877267888, 75.86926257206093],
          [22.701672578738943, 75.87614956804232],
          [22.69519936984291, 75.87329350997148],
          [22.697891628435425, 75.86525052144249],
        ],
        [
          [22.743572768117275, 75.93266633823237],
          [22.72346544538196, 75.93867368675191],
          [22.738189995168206, 75.91430101561537],
          [22.743572768117275, 75.93266633823237],
        ],
      ];

      // Add each polyline to the map
      polylinesData.forEach((points) => addPolyline(points));

      // Click event to display information if clicking on heatmap area
      this.map.on("click", (e) => {
        const latlng = e.latlng;
        const radius = 100; // same radius used in the heatmap

        const wardData = this.isPointInHeatmap(
          latlng,
          this.props.heatData,
          radius
        );
        if (wardData) {
          const popupContent =
            "<b>" +
            wardData.name +
            "</b><br>" +
            "Sector: " +
            wardData.info.sector +
            "<br>" +
            "Revenue: " +
            wardData.info.revenue +
            "<br>" +
            "Total Revenue: " +
            wardData.info.totalrevenue;
          L.popup().setLatLng(latlng).setContent(popupContent).openOn(this.map);
          this.setState({ selectedWard: wardData });
        } else {
          console.log(latlng);
        }
      });

      // Initial heatmap layer creation
      this.updateHeatLayer(this.props.heatData);
    }
  };

  componentDidMount() {
    this.initializeMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.heatData !== this.props.heatData) {
      this.updateHeatLayer(this.props.heatData);
    }
  }

  isPointInHeatmap = (latlng, heatData, radius) => {
    for (let i = 0; i < heatData.length; i++) {
      const point = heatData[i].coords;
      const distance = this.map.distance(latlng, L.latLng(point[0], point[1]));
      if (distance <= radius) {
        return heatData[i]; // Return the data point
      }
    }
    return null;
  };

  updateHeatLayer = (heatData) => {
    if (this.map && heatData.length > 0) {
      if (this.heatLayerRef) {
        this.heatLayerRef.setLatLngs(
          heatData.map((ward) => [
            ward.coords[0],
            ward.coords[1],
            ward.intensity,
          ])
        );
      } else {
        this.heatLayerRef = L.heatLayer(
          heatData.map((ward) => [
            ward.coords[0],
            ward.coords[1],
            ward.intensity,
          ]),
          {
            radius: 100,
            blur: 15,
            maxZoom: 17,
          }
        ).addTo(this.map);
      }
    }
  };

  postWardNumber = async (data) => {
    try {
      const response = await fetch("https://9d70-2401-4900-51fd-1774-893d-3551-b3fb-d590.ngrok-free.app/postWard", {
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

  handleButtonClick = async () => {
    const { selectedWard } = this.state;
    if (selectedWard) {
      try {
        await this.postWardNumber({ wardNo: selectedWard.name });
        toast.success("File sent successfully!");
      } catch (error) {
        toast.error("Failed to send file.");
      }
    } else {
      console.log("No ward selected");
    }
  };


  render() {
    return (
      <div className="card bg-base-100 shadow-xl p-4">
        <h2 className="text-2xl font-bold mb-4">Heat Map</h2>
        <div
          ref={this.mapRef}
          id="map"
          style={{ height: "400px", width: "100%" }}
        />
        <button onClick={this.handleButtonClick} className="btn bg-purple-500 text-white text-s py-1 px-2 mt-2 rounded">
          Post Ward Number
        </button>
      </div>
    );
  }
}

export default HeatMap;
