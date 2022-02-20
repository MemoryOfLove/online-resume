/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';

function Project() {
  return (
    <div className="content">
      <p className="label">项目经历 Project</p>
      <ul className="list">
        <li className="flex">
          <div className="project-left">
            <p>
              <span>2021.09 - 2021.12</span>
            </p>
          </div>
          <div className="project-right">
            <p>
              <span>XXX -前端</span>
            </p>
          </div>
          <div className="text">
            <ul className="item-box">
              <li className="item-content">
                <span>XXX</span>
              </li>
              <li className="item-content">
                <span>XXX</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
