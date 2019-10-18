import React, { PureComponent } from 'react';
import mojs from "mo-js";
import { Icon } from "zent";
import "./index.scss";
export default class ExampleSec extends PureComponent {
  showShapeAnimation() {
    const parent = document.getElementsByClassName("zan-list-content")[1];
    const Icon = document.getElementsByClassName("zan-list-content-icon")[1];
		Icon.style.WebkitTransformOrigin = Icon.style.transformOrigin = '-10% 50%';

    // 爆裂
    const Burst = new mojs.Burst({
      parent,
      count: 18,
      opacity: 0.6,
      radius: {90:150},
      fill: '#988ADE',
      shape : 'circle',
      childOptions: { radius: {'rand(20,5)':0} },
      isSwirl: true,
      swirlSize: 15,
      isRunLess: true,
      isShowEnd: false,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    // 彩圈
    setTimeout(function() {
      const Burst_Shape = new mojs.Burst({
        parent,
        duration: 1500,
        delay: 350,
        shape : 'circle',
        fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
        x: '50%',
        y: '50%',
        opacity: 0.6,
        radius: {40:90},
        count: 6,
        angle: 135,
        degree: 90,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      });
      const Burst_Shape2 = new mojs.Burst({
        parent,
        duration: 15000,
        delay: 550,
        shape : 'circle',
        fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
        x: '50%',
        y: '50%',
        opacity: 0.6,
        radius: {40:100},
        count: 6,
        angle: 45,
        degree: -90,
        isRunLess: true,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      });
      new mojs.Timeline().add(Burst_Shape, Burst_Shape2).play();
    }, 400);  
    
    const Transit1 = new mojs.Transit({
      parent,
      duration: 1200,
      type: 'circle',
      radius: {30: 100},
      fill: 'transparent',
      stroke: '#12b7f5',
      strokeWidth: {30:0},
      opacity: 0.6,
      isRunLess: true,
      isShowEnd: false,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
    const Transit2 = new mojs.Transit({
      parent,
      duration: 800,
      delay: 220,
      type: 'circle',
      radius: {30: 80},
      fill: 'transparent',
      stroke: '#988ADE',
      strokeWidth: {20:0},
      opacity: 0.3,
      isRunLess: true,
      isShowEnd: false,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    })
      new mojs.Tween({
        duration : 1500,
        onUpdate: function(progress) {
          Icon.style.color = '#e04545';
          if(progress > 0.3) {
            var elasticOutProgress = mojs.easing.elastic.out(1.43*progress-0.43);
            Icon.style.WebkitTransform = Icon.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1) rotate3d(0,0,1,' + 90*(1-elasticOutProgress) + 'deg)';
          }
          else {
            Icon.style.WebkitTransform = Icon.style.transform = 'scale3d(0,0,1)';
          }
        } 
      }).play();
      new mojs.Timeline().add(Burst, Transit1, Transit2).play();
    
  }
  handleReset = () => {
    const Icon = document.getElementsByClassName("zan-list-content-icon")[1];
    Icon.style.color = '#ccc';
  };
  render() {
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
        </div>
      </div>
    );
  }
}