/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import AvatarImage from '../../../../../assets/logo.jpg';

function Avatar() {
  return (
    <div className="box">
      <div className="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;
