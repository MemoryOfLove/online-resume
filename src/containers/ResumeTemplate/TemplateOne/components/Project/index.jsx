/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
function Project() {
  const projectList = useSelector((state) => state.project);
  const formatTime = (timeArray) => {
    return `${moment(timeArray[0]).format("YYYY-MM")}-${moment(
      timeArray[1]
    ).format("YYYY-MM")}`;
  };

  return (
    <div className="content">
      <p className="label">项目经历</p>
      <ul className="list">
        <li className="flex">
          {projectList.map((val)=>{
            return (
              <div className="template-one-educationItem" key={val.schoolName}>
              <div className="bar">
                <div className="projectName">{val.projectName}</div>
                <div className="projectRole">{val.projectRole?val.projectRole:'项目角色'}</div>
                <div className="time">{val.time?formatTime(val.time):'时间'}</div>
              </div>
              <div className="projectDescription">
              {val.projectDescription?val.projectDescription:'经历'}
              </div>
            </div>
            )
          })}
        </li>
      </ul>
    </div>
  );
}

export default Project;
