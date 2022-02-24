import "./index.less";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
function EducationBackground() {
  const educationList = useSelector((state) => state.educationBackground);
  const formatTime = (timeArray) => {
    return `${moment(timeArray[0]).format("YYYY-MM")}-${moment(
      timeArray[1]
    ).format("YYYY-MM")}`;
  };
  return (
    <div className="content">
      <p className="label">教育背景</p>
      <ul className="list">
        <li className="flex">
          {educationList.map((val)=>{
            return (
              <div className="template-one-educationItem" key={val.schoolName}>
              <div className="bar">
                <div className="schoolName">{val.schoolName}</div>
                <div className="schoolStage">{val.schoolStage?val.schoolStage:'学历'}</div>
                <div className="major">{val.major?val.major:'专业'}</div>
                <div className="time">{val.time?formatTime(val.time):'时间'}</div>
              </div>
              <div className="experience">
              {val.experience?val.experience:'经历'}
              </div>
            </div>
            )
          })}
          {/* <div className="template-one-educationItem">
            <div className="bar">
              <div className="schoolName">XX大学</div>
              <div className="schoolStage">学历</div>
              <div className="major">专业</div>
              <div className="time">时间</div>
            </div>
            <div className="experience">

            </div>
          </div> */}

          {/* <div className="education-background-left">
            <p>2016.09-2017.09</p>
            <p>XXX</p>
          </div>
          <div className="education-background-right">
            <p>XXX</p>
            <p>
              XXX
            </p>
          </div> */}
        </li>
      </ul>
    </div>
  );
}

export default EducationBackground;
