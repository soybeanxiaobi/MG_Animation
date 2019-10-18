import React, { PureComponent } from "react";
import Bounce from "bounce.js";
import "./index.scss";
const demoStateObj = {
  1: 'fir',
  2: 'sec',
  3: 'thr',
  4: 'four'
}
export default class TransformComp extends PureComponent {
  state = {
    demoState: 2,
    currentIndex: 1
  }
  componentDidMount() {}
  handleStartRotate = () => {
    const { currentIndex, demoState } = this.state;
    const currentDOM = document.getElementsByClassName(`transform-rotate-${demoStateObj[demoState]}`)[0];
    currentDOM.style.zIndex = currentIndex + 1;
    var bounce = new Bounce();
    bounce.rotate({
      from: 0,
      to: 90
    }).applyTo(currentDOM);
    this.setState({
      demoState: demoState === 4 ? 2 : demoState + 1,
      currentIndex: currentIndex + 1
    })
  }
  handleContinuityRotate = () => {
    
  }
  render() {
    return (
      <div className="zan-list">
        <span className="zan-list-reset" onClick={this.handleStartRotate}>
          start
        </span>
        <span className="zan-list-reset" style={{right: 34}} onClick={this.handleContinuityRotate}>
          Continuity | 
        </span>
        <div className="zan-list-content">
          <div className="transform">
            <div className="transform-rotate">
              <div className="transform-rotate-fir" />
              <div className="transform-rotate-sec" />
              <div className="transform-rotate-thr" />
              <div className="transform-rotate-four" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
