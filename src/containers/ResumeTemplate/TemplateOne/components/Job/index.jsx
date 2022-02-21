/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import '../../../styles/template-one.less';
import './index.less';

function Job() {
  return (
    <div className="container">
      <p className="title">求职意向 Work</p>
      <ul className="content">
        <li>职位： </li>
        <li>城市：</li>
      </ul>
    </div>
  );
}

export default Job;
