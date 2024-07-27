// // HeatMap.js
// import React, { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet.heat";
// import "./HeatMap.css";

// var heatData = [{}];

// const HeatMap = () => {
//   useEffect(() => {
//     // Initialize the map
//     const map = L.map("map").setView([22.7196, 75.8577], 13); // Center on Indore

//     // Add a base layer (OpenStreetMap)
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     var pointA = new L.LatLng(22.7196, 75.8577);
//     var pointB = new L.LatLng(22.721045836479618, 75.85545044798049);
//     var pointC = new L.LatLng(22.718052191606837, 75.85474748645231);
//     var pointD = new L.LatLng(22.71822043123735, 75.85782163213281);
//     // var pointE = new L.LatLng(22.718052191606837, 75.85474748645231);
//     var pointF = new L.LatLng(22.7196, 75.8577);
//     var pointList = [pointA, pointB, pointC, pointD, pointF];

//     var firstpolyline = new L.Polyline(pointList, {
//       color: "red",
//       weight: 3,
//       opacity: 0.5,
//       smoothFactor: 1,
//     });
//     firstpolyline.addTo(map);

//     var pointa = new L.LatLng(22.722644069652173, 75.84729175220465);
//     var pointb = new L.LatLng(22.719665304253958, 75.84695920255449);
//     var pointc = new L.LatLng(22.721852377534788, 75.85196812101357);
//     var pointd = new L.LatLng(22.722644069652173, 75.84729175220465);
//     var pointList2 = [pointa, pointb, pointc, pointd];

//     var firstpolyline2 = new L.Polyline(pointList2, {
//       color: "red",
//       weight: 3,
//       opacity: 0.5,
//       smoothFactor: 1,
//     });
//     firstpolyline2.addTo(map);
//     var point1 = new L.LatLng(22.734390263126222, 75.85011628242569);
//     var point2 = new L.LatLng(22.743315508056973, 75.85409187506565);
//     var point3 = new L.LatLng(22.7417521480478, 75.86363927110455);
//     var point4 = new L.LatLng(22.734390263126222, 75.85011628242569);
//     var pointList3 = [point1, point2, point3, point4];

//     var firstpolyline3 = new L.Polyline(pointList3, {
//       color: "red",
//       weight: 3,
//       opacity: 0.5,
//       smoothFactor: 1,
//     });
//     firstpolyline3.addTo(map);
//     var pointab = new L.LatLng(22.697891628435425, 75.86525052144249);
//     var pointbb = new L.LatLng(22.701256877267888, 75.86926257206093);
//     var pointcb = new L.LatLng(22.701672578738943, 75.87614956804232);
//     var pointdb = new L.LatLng(22.69519936984291, 75.87329350997148);
//     var pointddb = new L.LatLng(22.697891628435425, 75.86525052144249);
//     var pointList4 = [pointab, pointbb, pointcb, pointdb, pointddb];

//     var firstpolyline4 = new L.Polyline(pointList4, {
//       color: "red",
//       weight: 3,
//       opacity: 0.5,
//       smoothFactor: 1,
//     });
//     firstpolyline4.addTo(map);
//     var point43 = new L.LatLng(22.743572768117275, 75.93266633823237);
//     var point5 = new L.LatLng(22.72346544538196, 75.93867368675191);
//     // var point6 = new L.LatLng(22.72014032766679, 75.90966677532886);
//     // var point7 = new L.LatLng(22.7313029030923, 75.91817384947554);
//     var point71 = new L.LatLng(22.738189995168206, 75.91430101561537);
//     var point8 = new L.LatLng(22.743572768117275, 75.93266633823237);
//     var pointList5 = [point43, point5, point71, point8];

//     var firstpolyline5 = new L.Polyline(pointList5, {
//       color: "red",
//       weight: 3,
//       opacity: 0.5,
//       smoothFactor: 1,
//     });
//     firstpolyline5.addTo(map);

//     // Heat map data points with varying intensities (example data)
//     heatData = [
//       {
//         coords: [22.719784060261762, 75.85593361116833],
//         intensity: 0.53,
//         name: "Ward A",
//         info: { sector: "area51", revenue: 10, totalrevenue: 2 },
//       },
//       {
//         coords: [22.72149611458743, 75.84826745653889],
//         intensity: 0.53,
//         name: "Ward B",
//         info: { sector: "sapna sangita", revenue: 20, totalrevenue: 5 },
//       },
//       {
//         coords: [22.69519936984291, 75.87329350997148],
//         intensity: 0.53,
//         name: "Ward C",
//         info: { sector: "mr-10", revenue: 30, totalrevenue: 5 },
//       },
//       {
//         coords: [22.740168980449706, 75.85560745872762],
//         intensity: 0.53,
//         name: "Ward D",
//         info: { sector: "abcd", revenue: 40, totalrevenue: 5 },
//       },
//       {
//         coords: [22.737002590248636, 75.9220020943885],
//         intensity: 0.53,
//         name: "Ward E",
//         info: { sector: "f", revenue: 50, totalrevenue: 5 },
//       },
//       // Add more data points here as needed
//     ];

//     // Convert heat data to a format suitable for Leaflet.heat
//     const heatPoints = heatData.map((ward) => [
//       ward.coords[0],
//       ward.coords[1],
//       ward.intensity,
//     ]);

//     // Add heat map layer
//     const heat = L.heatLayer(heatPoints, {
//       radius: 100,
//       blur: 15,
//       maxZoom: 17,
//     }).addTo(map);

//     // Function to detect if a point is within the heatmap radius
//     function isPointInHeatmap(latlng, heatData, radius) {
//       for (let i = 0; i < heatData.length; i++) {
//         const point = heatData[i].coords;
//         const distance = map.distance(latlng, L.latLng(point[0], point[1]));
//         if (distance <= radius) {
//           return heatData[i]; // Return the data point
//         }
//       }
//       return null;
//     }

//     // Click event to display information if clicking on heatmap area
//     map.on("click", (e) => {
//       const latlng = e.latlng;
//       const radius = 100; // same radius used in the heatmap

//       const wardData = isPointInHeatmap(latlng, heatData, radius);
//       if (wardData) {
//         const popupContent =
//           "<b>" +
//           wardData.name +
//           "</b><br>" +
//           "Sector: " +
//           wardData.info.sector +
//           "<br>" +
//           "Revenue: " +
//           wardData.info.revenue +
//           "<br>" +
//           "Total Revenue: " +
//           wardData.info.totalrevenue;
//         L.popup().setLatLng(latlng).setContent(popupContent).openOn(map);
//       } else {
//         console.log(latlng);
//       }
//     });

//     // Cleanup function to remove the map when the component is unmounted
//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div id="map" style={{ height: "600px", width: "100%" }} />;
// };

// export default HeatMap;

// src/HeatMap.js
import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import "./HeatMap.css";

class HeatMap extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div
        ref={this.mapRef}
        id="map"
        style={{ height: "600px", width: "100%" }}
      />
    );
  }
}

export default HeatMap;
