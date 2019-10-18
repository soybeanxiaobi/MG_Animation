import React, { PureComponent } from "react";
import Zan_Pet from "./public/YZ_Pet.png";
import "./index.scss";
export default class ExampleFive extends PureComponent {
  state = {
    petActive: ""
  };
  showShapeAnimation() {
    this.setState({
      petActive: "youzan-pet-active"
    });
  }
  handleReset = () => {
    this.setState({
      petActive: ""
    });
  };
  render() {
    const { petActive } = this.state;
    return (
      <div className="zan-list">
        <span className="zan-list-reset" onClick={() => this.handleReset()}>
          Reset
        </span>
        <div className="zan-list-content">
          <img
            alt="霸王龙"
            src={Zan_Pet}
            className={`youzan-pet ${petActive}`}
            onClick={() => this.showShapeAnimation()}
          />
        </div>
      </div>
    );
  }
}
