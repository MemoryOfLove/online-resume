import React from "react";
import "./index.less";
import Avatar from "./components/Avatar";
import BaseInfo from "./components/BaseInfo";
import Contact from "./components/Contact";
import Job from "./components/Job";
import Certificate from "./components/Certificate";
import Synopsis from "./components/Synopsis";
import Skill from "./components/Skill";
import EducationBackground from "./components/EducationBackground";
import Project from "./components/Project";
import Work from "./components/Work";

import { connect } from "react-redux";

function TemplateOne(props) {
  const userInfo=props.state.userInfo;
  // 必须带有id，以方便导出时获取DOM元素内容
  return (
    <div className="a4-box">
      <div className="flex container" id="visPdf">
        {/* 左侧 */}
        <div className="left">
          <div className="avatar">
            <Avatar />
          </div>
          <div className="fillColor" />
          <div className="baseData">
            <BaseInfo userInfo={userInfo}/>
            <Contact userInfo={userInfo}/>
            <Job userInfo={userInfo}/>
            <Certificate />
          </div>
        </div>
        {/* 内容 */}
        <div className="center">
          <Synopsis />
          <div className="listData">
            <Skill />
            <EducationBackground />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {state,ownProps};
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TemplateOne);
