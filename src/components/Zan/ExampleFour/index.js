import React, { PureComponent } from 'react';
import mojs from "mo-js";
import { Icon } from "zent";
import "./index.scss";
export default class ExampleFour extends PureComponent {
  state = {
    addSpan: '',
    count: 1,
  }
  showShapeAnimation() {
    this.setState({
      addSpan: 'zan-list-content-span-animation'
    })
    const _this = this;
    const parent = document.getElementsByClassName("zan-list-content")[3];
    const Icon = document.getElementsByClassName("zan-list-content-icon")[3];
    var opacityCurve16 = mojs.easing.path('M0,0 L25.333,0 L75.333,100 L100,0');
		var translationCurve16 = mojs.easing.path('M0,100h25.3c0,0,6.5-37.3,15-56c12.3-27,35-44,35-44v150c0,0-1.1-12.2,9.7-33.3c9.7-19,15-22.9,15-22.9');
		var squashCurve16 = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');
    const Burst = new mojs.Burst({
      parent,
      duration: 1700,
      delay: 350,
      shape : 'circle',
      fill: '#FF6767',
      x: '50%',
      y: '50%',
      opacity: 0.3,
      childOptions: { radius: {'rand(15,5)':0} },
      radius: {0:150},
      degree: 50,
      angle: -25,
      count: 6,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // burst animation (line1)
    const Burst2 = new mojs.Burst({
      parent,
      duration: 600,
      delay: 200,
      shape : 'circle',
      fill: '#C0C1C3',
      x: '20%',
      y: '100%',
      childOptions: { 
        radius: {60:0},
        type: 'line',
        stroke: '#FF6767',
        strokeWidth: 2,
        strokeLinecap: 'round'
      },
      radius: {50:180},
      angle: 180,
      count: 1,
      opacity: 0.4,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // burst animation (line2)
    const Burst3 = new mojs.Burst({
      parent,
      duration: 600,
      delay: 200,
      shape : 'circle',
      fill: '#C0C1C3',
      x: '50%',
      y: '100%',
      childOptions: { 
        radius: {60:0},
        type: 'line',
        stroke: '#FF6767',
        strokeWidth: 2,
        strokeLinecap: 'round'
      },
      radius: {50:220},
      angle: 180,
      count: 1,
      opacity: 0.4,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // burst animation (line3)
    // const Burst4 = new mojs.Burst({
    //   parent,
    //   duration: 600,
    //   delay: 200,
    //   shape : 'circle',
    //   fill: '#C0C1C3',
    //   x: '80%',
    //   y: '100%',
    //   childOptions: { 
    //     radius: {60:0},
    //     type: 'line',
    //     stroke: '#FF6767',
    //     strokeWidth: 2,
    //     strokeLinecap: 'round'
    //   },
    //   radius: {50:180},
    //   angle: 180,
    //   count: 1,
    //   opacity: 0.4,
    //   isRunLess: true,
    //   easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    // })
    // icon scale animation
    const Tween = new mojs.Tween({
      duration : 500,
      onUpdate: function(progress) {
        Icon.style.color = '#e04545';
        var translateProgress = translationCurve16(progress),
          squashProgress = squashCurve16(progress),
          scaleX = 1 - 2*squashProgress,
          scaleY = 1 + 2*squashProgress;

        Icon.style.WebkitTransform = Icon.style.transform = 'translate3d(0,' + -180*translateProgress + 'px,0) scale3d(' + scaleX + ',' + scaleY + ',1)';

        var opacityProgress = opacityCurve16(progress);
        Icon.style.opacity = opacityProgress;
      },
      onComplete: function() {
        _this.setState({
          addSpan: '',
          count: _this.state.count + 1
        })
      }
    })

    new mojs.Timeline().add(Burst, Burst2, Burst3, Tween).play()
    
  }
  handleReset = () => {
    this.setState({
      addSpan: '',
      count: 0
    })
    const Icon = document.getElementsByClassName("zan-list-content-icon")[3];
    Icon.style.color = '#ccc';
  };
  render() {
    const { addSpan, count } = this.state;
    return (
      <div className="zan-list">
        <span
          className="zan-list-reset"
          onClick={() => this.handleReset()}
        >
          Reset
        </span>
        <div className="zan-list-content">
          <Icon
            type="youzan"
            className={`zan-list-content-icon`}
            onClick={() => this.showShapeAnimation()}
          />
          <span className={`zan-list-content-span ${addSpan}`}>+{count}</span>
        </div>
      </div>
    );
  }
}