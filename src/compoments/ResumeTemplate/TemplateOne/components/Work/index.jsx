/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Work() {
  return (
    <div className="content">
      <p className="label">工作经历 Work</p>
      <ul className="list">
        <li className="flex">
          <div className="work-left">
            <p>2019.07-至今</p>
            <p>前端</p>
          </div>
          <div className="work-right">
            <p>XXX</p>
            <p>XXX</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
