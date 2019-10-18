import React from "react";
import {
  speed,
  floor,
  drop,
  whatIsMg,
  decorate,
  transform1,
  transform2,
  transform3,
  square
} from "./files/imgs.js";
import "./index.scss";

const ENUM_DESCRIPTION = [
  {
    label: "🏃🏻加速度: 速度变化不规律",
    value: speed
  },
  {
    label: "🚣‍运动拖拽: 运动更形象",
    value: drop
  },
  {
    label: "🍌层次感: 层次感让动画更饱满,但增加帧工作量",
    value: floor
  },
  {
    label: "🤹‍修饰: 类似层次感,在自身周围增加装饰",
    value: decorate
  }
];

const video = [transform1, transform2, transform3, square];
export default function AEMg() {
  return (
    <div className="ae-wrapper">
      <div className="imgs">
        <div className="imgs-list">
          <h1>什么是MG?</h1>
          <img src={whatIsMg} alt={whatIsMg} />
        </div>
      </div>
      <div className="desc">
        {ENUM_DESCRIPTION.map((item, index) => (
          <div key={item.label + index} className="desc-list">
            <div className="desc-list-label">{item.label}</div>
            <ul className="desc-list-value">
              <img src={item.value} alt={item.value} />
            </ul>
          </div>
        ))}
      </div>
      <div className="imgs">
        {video.map((item, index) => (
          <div className="imgs-list" key={item + index}>
            <video loop autoPlay>
              <source src={item} type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
