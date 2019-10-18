import React, { PureComponent } from "react";
import './index.scss';
import TransformComp from '../../components/TransformComp';
export default class Transform extends PureComponent {
  render() {
    return (
      <div className="transform-wried">
        <TransformComp />
      </div>
    );
  }
}
