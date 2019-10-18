import React, { PureComponent } from "react";
import Scale from './Scale';
import TranslateIn from './TranslateIn';
import Rotate from './Rotate';
import Skew from './Skew';
export default class TransformComp extends PureComponent {
  render() {
    return (
      <div className="zan">
        <Scale />
        <TranslateIn />
        <Rotate />
        <Skew />
      </div>
    );
  }
}
