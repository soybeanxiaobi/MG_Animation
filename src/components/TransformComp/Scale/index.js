import React, { PureComponent } from "react";
import Bounce from "bounce.js";
import "./index.scss";
export default class TransformComp extends PureComponent {
  state = {
    scaleCount: 1
  };
  componentDidMount() {}

  handleTransformScale = () => {
    let { scaleCount } = this.state;
    let scaleObj = {};
    switch (scaleCount) {
      case 1:
        scaleObj = {
          from: { x: 1, y: 1 },
          to: { x: 1, y: 0.2 }
        };
        break;
      case 2:
        scaleObj = {
          from: { x: 1, y: 0.2 },
          to: { x: 0.1, y: 0.2 }
        };
        break;
      case 3:
        scaleObj = {
          from: { x: 0.1, y: 0.2 },
          to: { x: 0.1, y: 2 }
        };
        break;
      case 4:
        scaleObj = {
          from: { x: 0.1, y: 2 },
          to: { x: 1, y: 1 }
        };
        break;
      default: break;
    }
    this.renderTransform(scaleObj);
  };

  renderTransform = obj => {
    const bounce = new Bounce();
    bounce
      .scale({ ...obj })
      .applyTo(document.getElementsByClassName("transform-dergee")[0]);

    this.setState({
      scaleCount: this.state.scaleCount === 4 ? 1 : this.state.scaleCount + 1
    });
  };

  render() {
    return (
      <div className="zan-list">
        <span className="zan-list-reset" onClick={this.handleTransformScale}>
          Transform
        </span>
        <div className="zan-list-content">
          <div className="transform">
            <div className="transform-dergee" />
          </div>
        </div>
      </div>
    );
  }
}
