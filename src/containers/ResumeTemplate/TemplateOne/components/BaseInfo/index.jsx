import React from 'react';
import '../../../styles/template-one.less';
import { connect } from "react-redux";
import moment from 'moment'

const BaseInfo=(props)=> {
  const userInfo=props.userInfo;
  const format=(sex)=>{
    return 'Male'===sex?'男':'女';
  }

  return (
    <div className="container">
      <p className="title">基本信息</p>
      <ul className="content">
        <li>姓名：{userInfo.name?userInfo.name:'默认名字'}</li>
        <li>性别：{userInfo.sex?format(userInfo.sex):'隐私'}</li>
        <li>生日：{userInfo.birthday?moment(userInfo.birthday).format('YYYY-MM-DD'):'秘密'}</li>
        <li>学历：{userInfo.HighestEducation?userInfo.HighestEducation:'隐私'}</li>
        <li>籍贯：{userInfo.nativePlace?userInfo.nativePlace:'隐私'}</li>
      </ul>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {state,ownProps};
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BaseInfo);