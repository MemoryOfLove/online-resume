import React, { Fragment } from "react";
import MyScrollBox from "../common/MyScrollBox";
import UserInfo from "./UserInfo"
import PersonalAdvantage from "./PersonalAdvantage";
import Test from './Test'
import "./index.less";
export default function index({ style }) {
  return (
    <div className="resume-flex-container" style={style}>
      <div className="resume-left">
        <MyScrollBox maxHeight={style.height}>简历配置
          <UserInfo></UserInfo>
          <PersonalAdvantage></PersonalAdvantage>
          <Test></Test>
        </MyScrollBox>
      </div>
      <div className="resume-right">
        <MyScrollBox maxHeight={style.height}>简历预览</MyScrollBox>
      </div>
    </div>
  );
}
