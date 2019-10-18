import React, { PureComponent } from 'react';
import mojs from "mo-js";
import { Icon } from "zent";
import "./index.scss";
export default class ExampleThr extends PureComponent {
  showShapeAnimation() {
    const parent = document.getElementsByClassName("zan-list-content")[2];
    const Icon = document.getElementsByClassName("zan-list-content-icon")[2];
		const Burst = new mojs.Burst({
      parent,
      duration: 600,
      shape : 'circle',
      fill: '#C0C1C3',
      x: '0%',
      y: '0%',
      childOptions: { 
        radius: {60:0},
        type: 'line',
        stroke: '#988ADE',
        strokeWidth: 1
      },
      radius: {80:250},
      angle: -90,
      count: 1,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // burst animation
    const Burst2 = new mojs.Burst({
      parent,
      duration: 600,
      shape : 'circle',
      fill: '#C0C1C3',
      x: '0%',
      y: '50%',
      childOptions: { 
        radius: {60:0},
        type: 'line',
        stroke: '#988ADE',
        strokeWidth: 1
      },
      radius: {80:200},
      angle: -90,
      count: 1,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // burst animation
    const Burst3 = new mojs.Burst({
      parent,
      duration: 600,
      shape : 'circle',
      fill: '#C0C1C3',
      x: '0%',
      y: '100%',
      childOptions: { 
        radius: {60:0},
        type: 'line',
        stroke: '#988ADE',
        strokeWidth: 1
      },
      radius: {80:250},
      angle: -90,
      count: 1,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // burst animation
    const Burst4 = new mojs.Burst({
      parent,
      duration: 600,
      delay: 150,
      shape : 'circle',
      fill: '#C0C1C3',
      x: '50%',
      y: '50%',
      childOptions: { 
        radius: {30:0},
        type: 'line',
        stroke: '#988ADE',
        strokeWidth: {2:1}
      },
      radius: {60:90},
      degree: -90,
      angle: 135,
      count: 6,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // icon scale animation
    new mojs.Tween({
      duration : 1600,
      onUpdate: function(progress) {
        Icon.style.color = '#e04545';
        var elasticOutProgress = mojs.easing.elastic.out(progress);
        Icon.style.WebkitTransform = Icon.style.transform = 'translate3d(' + -120*(1-elasticOutProgress) + '%,0,0)';
      }
    }).play();

    new mojs.Timeline().add(Burst, Burst2, Burst3, Burst4).play();
  }
  handleReset = type => {
    const Icon = document.getElementsByClassName("zan-list-content-icon")[2];
    Icon.style.color = '#ccc';
  };
  render() {
    return (
      <div className="zan-list">
        <span
          className="zan-list-reset"
          onClick={() => this.handleReset("ev3")}
        >
          Reset
        </span>
        <div className="zan-list-content">
          <Icon
            type="youzan"
            className={`zan-list-content-icon`}
            onClick={() => this.showShapeAnimation()}
          />
        </div>
      </div>
    );
  }
}