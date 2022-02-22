/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';
import './index.less';

function Job(props) {
  const userInfo=props.userInfo;
  return (
    <div className="container">
      <p className="title">求职意向 Work</p>
      <ul className="content">
        <li>职位：{userInfo.job?userInfo.job:'隐私'} </li>
        <li>城市：{userInfo.city?userInfo.city:'隐私'}</li>
      </ul>
    </div>
  );
}

export default Job;
