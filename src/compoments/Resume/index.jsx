import React, { Fragment } from "react";
import MyScrollBox from "../common/MyScrollBox";
import UserInfo from "./UserInfo";
import PersonalAdvantage from "./PersonalAdvantage";
import "./index.less";
import MyDragPanel from "../common/MyDragContainer/MyDragPanel";
import MyDragContainer from "../common/MyDragContainer";
import TemplateOne from "../ResumeTemplate/TemplateOne";

export default function index({ style }) {
  return (
    <div className="resume-flex-container" style={style}>
      <div className="resume-left">
        {/* <MyScrollBox maxHeight={style.height}> */}
          简历配置
          <MyDragContainer>
            <MyDragPanel id="userInfo">
              <UserInfo></UserInfo>
            </MyDragPanel>
            <MyDragPanel id="personalAdvantage">
              <PersonalAdvantage></PersonalAdvantage>
            </MyDragPanel>
          </MyDragContainer>
        {/* </MyScrollBox> */}
      </div>
      <div className="resume-right">
        {/* <MyScrollBox maxHeight={style.height}> */}
          简历预览
          <TemplateOne></TemplateOne>
          
          {/* </MyScrollBox> */}
      </div>
    </div>
  );
}
