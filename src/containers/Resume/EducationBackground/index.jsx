import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space } from "antd";
import MyButton from "../../common/MyButton";
import MyCard from "../../common/MyCard";
import "./index.less";
import MyDragPanel from "../../common/MyDragContainer/MyDragPanel";
import MyDragContainer from "../../common/MyDragContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  add_educationAction,
  del_educationAction,
  update_educationAction,
} from "../../../redux/actions";
import { Alert } from 'antd';

import EducationItem from "./EducationItem";
import { render } from "less";
const { TextArea } = Input;
const EducationBackground = (props) => {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const educationList = useSelector((state) => state.educationBackground);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const config = {
    advantage: {
      rules: [{ type: "string", required: true, message: "请输入个人优势!" }],
    },
  };
  const handleOnClick = () => {
    if (disable) {
      setShowText("保存");
      setIsDisable((value) => {
        return !value;
      });
    } else {
      form
        .validateFields()
        .then((values) => {
          console.log(values);
          setShowText("修改");
          setIsDisable((value) => {
            return !value;
          });
        })
        .catch((errorInfo) => {
          console.log("校验出错");
        });
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleAddEducation = () => {
    let index=educationList.findIndex((val) => {
      return val.schoolName === "未填写学校名称";
    })
    console.log(index);;
    if (
      index < 0
    ) {
      console.log('可以创建');
      dispatch(add_educationAction({ schoolName: "未填写学校名称" }));
    } else {
      //禁止创建新的背景
      console.log('不可以创建');
      setVisible(true);
    }
  };
  let showList = [];

  if (educationList && educationList.length > 0) {
    showList = educationList.map((val) => {
      console.log(val);
      return (
        <MyDragPanel id={val.schoolName} key={val.schoolName}>
          <EducationItem
            key={val.schoolName}
            educationInfo={val}
          ></EducationItem>
        </MyDragPanel>
      );
    });
  }

  return (
    <div className="EducationBackground">
      <MyCard
        style={{ margin: "10px" }}
        title="教育背景"
        bordered={true}
        showArrow={true}
      >
        {/* <MyDragContainer> */}
        {showList}
        {/* </MyDragContainer> */}
        <span className="addEducation" onClick={handleAddEducation}>
          <a>添加新的教育经历</a>
          {visible ? (
            <Alert
              message="当前名字已经存在,请更换名字"
              type="error"
              closable
              afterClose={handleClose}
            />
          ) : null}
        </span>
      </MyCard>
    </div>
  );
};
// const mapStateToProps = (state, ownState) => {
//   return { state, ownState };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addEducation: (val) => dispatch(add_educationAction(val)),
//     delEducation: (val) => dispatch(del_educationAction(val)),
//     updateEducation: (val) => dispatch(update_educationAction(val)),
//   };
// };
export default EducationBackground;
