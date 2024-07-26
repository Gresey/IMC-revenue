// Sample heat data array
var heatData = [
  {
    coords: [22.7196, 75.8577],
    intensity: 0.5,
    name: "Ward A",
    info: { sector: "area51", revenue: 5, totalrevenue: 2 },
  },
  // Add more data objects as needed
];

document.addEventListener("DOMContentLoaded", (event) => {
  displayHeatData();
});

function displayHeatData() {
  // Find the display element
  const displayElement = document.getElementById("dataDisplay");

  // Clear previous content
  displayElement.innerHTML = "";

  heatData.forEach((data, index) => {
    // Create a container for each data object
    const container = document.createElement("div");
    container.className = "dataContainer";

    // Create a paragraph to display basic data information
    const p = document.createElement("p");
    p.textContent = `Name: ${data.name}, Coordinates: (${data.coords.join(
      ", "
    )}), Intensity: ${data.intensity}`;

    // Create a button to show more details
    const button = document.createElement("button");
    button.textContent = `Show details for ${data.name}`;
    button.addEventListener("click", () => showDetails(index));

    // Append the paragraph and button to the container
    container.appendChild(p);
    container.appendChild(button);

    // Append the container to the display element
    displayElement.appendChild(container);
  });
}

function showDetails(index) {
  const data = heatData[index];
  alert(
    `Details for ${data.name}:\nSector: ${data.info.sector}\nRevenue: ${data.info.revenue}\nTotal Revenue: ${data.info.totalrevenue}`
  );
}
