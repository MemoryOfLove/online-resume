/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

function Work() {
  const workList = useSelector((state) => state.work);
  const formatTime = (timeArray) => {
    return `${moment(timeArray[0]).format("YYYY-MM")}-${moment(
      timeArray[1]
    ).format("YYYY-MM")}`;
  };
  return (
    <div className="content">
    <p className="label">工作经历</p>
    <ul className="list">
      <li className="flex">
        {workList.map((val)=>{
          return (
            <div className="template-one-educationItem" key={val.schoolName}>
            <div className="bar">
              <div className="companyName">{val.companyName}</div>
              <div className="workRole">{val.workRole?val.workRole:'项目角色'}</div>
              <div className="time">{val.time?formatTime(val.time):'时间'}</div>
            </div>
            <div className="workDescription">
            {val.workDescription?val.workDescription:'经历'}
            </div>
          </div>
          )
        })}
      </li>
    </ul>
  </div>
  );
}

export default Work;
