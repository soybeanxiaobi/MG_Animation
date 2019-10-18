import React from "react";
import {
  img01,
  img02,
  img03,
  img04,
  img05,
  code01,
  code02,
  code03,
  code05,
  tuchong01,
  tuchong02,
  modelmayhem,
} from "./imgs";
import "./index.scss";

const imgs = [
  {
    code: code01,
    img: img01,
  },
  {
    code: code02,
    img: img02,
  },
  {
    code: code03,
    img: img03,
  },
  {
    code: code01,
    img: img04,
  },
  {
    code: code05,
    img: img05,
  },
];
const ENUM_DESCRIPTION = [
  {
    label: "👩🏻‍🏭互补色: 混合产生白光，让画面更有冲击感",
    value: [
      {
        prefix: getDoubleColorBlock("red", "green"),
        text: "红色与绿色互补",
      },
      {
        prefix: getDoubleColorBlock("blue", "orange"),
        text: "蓝色与橙色互补",
      },
      {
        prefix: getDoubleColorBlock("purple", "yellow"),
        text: "紫色与黄色互补",
      },
    ],
  },
  {
    label: "👩🏻‍💻对比色: 色彩平衡作用",
    value: [
      {
        prefix: getDoubleColorBlock("yellow", "blue"),
        text: "黄和蓝",
      },
      {
        prefix: getDoubleColorBlock("purple", "green"),
        text: "紫和绿",
      },
      {
        prefix: getDoubleColorBlock("red", "cyan"),
        text: "红和青",
      },
    ],
  },
  {
    label: "👩🏻‍💼HSL: 调整图片整体的白平衡",
    value: [],
  },
  {
    label: "👩🏻‍⚖️相机校准: 调整相机的白平衡,我通常用作色差对比",
    value: [],
  },
  {
    label: "👩🏻‍🎨分离色调: 单独调整画面的某一处色相和饱和度",
    value: [],
  },
];

export default function Lightroom() {
  return (
    <div className="wrapper">
      <div className="desc">
        {ENUM_DESCRIPTION.map((item, index) => (
          <div key={item + index} className="desc-list">
            <div className="desc-list-label">{item.label}</div>
            <ul className="desc-list-value">
              {item.value.map(v => (
                <li key={v.text + index} className="desc-list-value-li">
                  {v.prefix}&nbsp;{v.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="imgs">
        {imgs.map(item => (
          <div className="imgs-list" key={item.code}>
            <img src={item.code} alt={item.code} />
            <img src={item.img} alt={item} />
          </div>
        ))}
      </div>
      <div className="recommend-website">
        <a href="https://www.modelmayhem.com/">Model Mayhem</a>
        <img src={modelmayhem} alt="Model" />
      </div>
      <div className="recommend-website">
        <a href="https://www.tuchong.com/">图虫</a>
        <img src={tuchong01} alt="图虫" style={{ marginRight: 150 }} />
        <img src={tuchong02} alt="图虫" />
      </div>
    </div>
  );
}

function getDoubleColorBlock(color1, color2) {
  return (
    <>
      <div className={`color-block`} style={{ backgroundColor: color1 }}></div>
      <div className={`color-block`} style={{ backgroundColor: color2 }}></div>
    </>
  );
}
