import React from 'react';
import '../../../styles/template-one.less';


function Contact(props) {
  const userInfo=props.userInfo;
  return (
    <div className="container">
      <p className="title">联系方式 Contact</p>
      <ul className="content">
        <li>电话：{userInfo.tel?userInfo.tel:'隐私'}</li>
        <li>邮箱：{userInfo.email?userInfo.email:'隐私'}</li>
      </ul>
    </div>
  );
}

export default Contact;
