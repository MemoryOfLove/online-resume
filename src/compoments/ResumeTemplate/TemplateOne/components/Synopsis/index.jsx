/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div className="content">
      <p className="name">XX</p>
      <p className="job">前端</p>
      <p className="summary">
        {[
          'XXX',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;
