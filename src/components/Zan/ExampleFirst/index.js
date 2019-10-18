import React, { PureComponent } from 'react';
import mojs from "mo-js";
import { Icon } from "zent";
import "./index.scss";
export default class ExampleFirst extends PureComponent {
  state = {
    ev1Active: ""
  };
  handleClickIcon = number => {
    const parent = document.getElementsByClassName("zan-list-content")[number];
    switch (number) {
      case 0:
        this.showShapeAnimation(parent);
        break;
      default:
    }
  };
  showShapeAnimation(parent) {
    this.setState({
      ev1Active: "zan-list-animation"
    });
    // 发散
    const Burst = new mojs.Burst({
      parent,
      duration: 2200,
      shape: "circle",
      fill: "#C0C1C3",
      x: "50%",
      y: "50%",
      opacity: 0.6,
      childOptions: { radius: { 15: 0 } },
      radius: { 30: 90 },
      count: 8,
      isRunLess: true,
      isShowEnd: false,
    });
    // 圈1
    const Transit = new mojs.Transit({
      parent,
      opacity: 0.4,
      duration: 500,
      type: "circle",
      radius: { 0: 60 }, // 半径
      fill: "transparent",
      stroke: "#e04545",
      strokeWidth: { 20: 0 },
      className: "burst",
      x: "-50%",
      y: "-50%",
      isRunLess: true,
      isShowEnd: false,      
    });
    // 圈2
    const Transit2 = new mojs.Transit({
      parent,
      opacity: 0.4,
      duration: 500,
      type: "circle",
      radius: { 0: 40 }, // 半径
      fill: "transparent",
      stroke: "#12b7f5",
      strokeWidth: { 10: 0 },
      className: "burst",
      x: "20%",
      y: "10%",
      isRunLess: true,
      isShowEnd: false,      
    });
    setTimeout(function() {
      new mojs.Timeline().add(Burst, Transit, Transit2).play();
    }, 400);
  }

  handleReset = type => {
    const reset = `${type}Active`;
    // console.log("reset ====>", reset);
    this.setState({
      [reset]: ""
    });
  };
  render() {
    const { ev1Active } = this.state;
    return (
      <div className="zan-list">
        <span
          className="zan-list-reset"
          onClick={() => this.handleReset("ev1")}
        >
          Reset
        </span>
        <div className="zan-list-content">
          <Icon
            type="youzan"
            className={`zan-list-content-icon ${ev1Active}`}
            onClick={() => this.handleClickIcon(0)}
          />
        </div>
      </div>
    );
  }
}