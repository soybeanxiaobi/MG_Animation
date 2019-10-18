import React, { PureComponent } from "react";
import Bounce from "bounce.js";
import "./index.scss";
export default class TransformComp extends PureComponent {
  state = {
    demoState: 2,
    currentIndex: 1
  }
  componentDidMount() {}
  handleStartSkew = () => {
    const currentDOM = document.getElementsByClassName(`transform-skew-fir`)[0];
    var bounce = new Bounce();
    bounce.translate({
      from: { x: -180, y: 0 },
      to: { x: 0, y: 0 },
      duration: 1200,
      easing: 'bounce',
      stiffness: 4
    }).scale({
      easing: 'sway',
      delay: 30,
      duration: 850,
      from: { x: 1, y: 1 },
      to: { x: 0.1, y: 2.3 },
    }).applyTo(currentDOM);
  }
  handleContinuitySkew = () => {
    
  }
  render() {
    return (
      <div className="zan-list">
        <span className="zan-list-reset" onClick={this.handleStartSkew}>
          start
        </span>
        <div className="zan-list-content">
          <div className="transform">
            <div className="transform-skew">
              <div className="transform-skew-fir" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
