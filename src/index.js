import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

//console.log(animals);
//const [cat, dog] = animals;
/*ReactDOM.render(
  <table>
    <tr>
      <th>Animal</th>
      <th>Sound</th>
    </tr>
    <tr>
      <td>{cat.name}</td>
      <td>{cat.sound}</td>
    </tr>
    <tr>
      <td>{dog.name}</td>
      <td>{dog.sound}</td>
    </tr>
  </table>,
  document.getElementById("root")
);*/
const [honda, tesla] = cars;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
