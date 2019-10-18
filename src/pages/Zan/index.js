import React, { PureComponent } from "react";
import ExampleFirst from '../../components/Zan/ExampleFirst';
import ExampleSecond from '../../components/Zan/ExampleSec';
import ExampleThrid from '../../components/Zan/ExampleThr';
import ExampleFour from '../../components/Zan/ExampleFour';
import ExampleFive from '../../components/Zan/ExampleFive';

import './index.scss';
export default class Zan extends PureComponent {
  render() {
    return(
      <div className="zan">
        <ExampleFirst />
        <ExampleSecond />
        <ExampleThrid />
        <ExampleFour />
        <ExampleFive />
      </div>
    )
  }
}
