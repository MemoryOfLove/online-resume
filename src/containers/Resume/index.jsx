import React, { Fragment } from "react";
import MyScrollBox from "../common/MyScrollBox";
import UserInfo from "./UserInfo";
import PersonalAdvantage from "./PersonalAdvantage";
import EducationBackground from "./EducationBackground";
import Project from './Project'
import WorkExperience from './WorkExperience'
import "./index.less";
import MyDragPanel from "../common/MyDragContainer/MyDragPanel";
import MyDragContainer from "../common/MyDragContainer";
import TemplateOne from "../ResumeTemplate/TemplateOne";

export default function Resume({ style }) {
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
            <MyDragPanel id="educationBackground">
              <EducationBackground></EducationBackground>
            </MyDragPanel>
            <MyDragPanel id="project">
              <Project></Project>
            </MyDragPanel>
            <MyDragPanel id="project">
              <WorkExperience></WorkExperience>
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
