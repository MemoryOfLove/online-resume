import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space } from "antd";
import MyButton from "../../common/MyButton";
import MyCard from "../../common/MyCard";
import "./index.less";
import MyDragPanel from "../../common/MyDragContainer/MyDragPanel";
import MyDragContainer from "../../common/MyDragContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  add_workAction,
} from "../../../redux/actions";
import { Alert } from 'antd';


import WorkItem from "./WorkItem";
import { render } from "less";
const { TextArea } = Input;
const WorkExperience = (props) => {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const workList = useSelector((state) => state.work);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  const [form] = Form.useForm();


  const handleAddWorkExperience = () => {
    let index=workList.findIndex((val) => {
      return val.companyName === "未填写公司名称";
    })
    console.log(index);;
    if (
      index < 0
    ) {
      console.log('可以创建');
      dispatch(add_workAction({ companyName: "未填写公司名称" }));
    } else {
      //禁止创建新的背景
      console.log('不可以创建');
      setVisible(true);
    }
  };
  let showList = [];

  if (workList && workList.length > 0) {
    showList = workList.map((val) => {
      console.log(val);
      return (
        <MyDragPanel id={val.companyName} key={val.companyName}>
          <WorkItem
            key={val.companyName}
            workInfo={val}
          ></WorkItem>
        </MyDragPanel>
      );
    });
  }

  return (
    <div className="WorkExperience">
      <MyCard
        style={{ margin: "10px" }}
        title="工作经历"
        bordered={true}
        showArrow={true}
      >
        {showList}
        <span className="addWork" onClick={handleAddWorkExperience}>
          <a>添加新的工作经历</a>
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
export default WorkExperience;
