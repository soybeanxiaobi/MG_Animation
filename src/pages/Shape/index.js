import React, { PureComponent } from "react";
import Mojs from "mo-js";
import './index.css'
export default class Shape extends PureComponent {
  render() {
    new Mojs.Shape({
      shape: "circle",
      parent: document.getElementById('square'),
      scale: { 0: 1 },
      left: "25%",
      fill: { cyan: "#12b7f5" },
      fillOpacity: { 0: 1 },
      radius: 25,
      duration: 1000,
      repeat: 999
    }).play();

    new Mojs.ShapeSwirl({
      x:        { 0: 200 },
      duration: 2000,
      onComplete () {
        console.log( 'completed' );
      }
    }).play();

    return (
      <div id="square"></div>
    );
  }
}
