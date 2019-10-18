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

  handleStartTranslateIn = () => {
    const { currentIndex, demoState } = this.state;
    const currentDOM = document.getElementsByClassName(`transform-translateIn-${demoStateObj[demoState]}`)[0];
    currentDOM.style.zIndex = currentIndex + 1;
    var bounce = new Bounce();
    bounce.translate({
      from: { x: 0, y: 0 },
      to: { x: 0, y: 100 }
    }).applyTo(currentDOM);
    this.setState({
      demoState: demoState === 4 ? 2 : demoState + 1,
      currentIndex: currentIndex + 1
    })
  };

  handleContinuityTranslateIn = () => {
    // const { demoState } = this.state;
    // Object.keys(demoStateObj).map(item => {
    // })
  }

  render() {
    return (
      <div className="zan-list">
        <span className="zan-list-reset" onClick={this.handleStartTranslateIn}>
          Start
        </span>
        <span className="zan-list-reset" style={{right: 34}} onClick={this.handleContinuityTranslateIn}>
          Continuity | 
        </span>
        <div className="zan-list-content">
          <div className="transform">
            <div className="transform-translateIn">
              <div className="transform-translateIn-fir" />
              <div className="transform-translateIn-sec" />
              <div className="transform-translateIn-thr" />
              <div className="transform-translateIn-four" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
