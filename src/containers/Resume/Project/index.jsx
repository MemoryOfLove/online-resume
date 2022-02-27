import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space } from "antd";
import MyButton from "../../common/MyButton";
import MyCard from "../../common/MyCard";
import "./index.less";
import MyDragPanel from "../../common/MyDragContainer/MyDragPanel";
import MyDragContainer from "../../common/MyDragContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  add_projectAction,
} from "../../../redux/actions";
import { Alert } from 'antd';


import ProjectItem from "./ProjectItem";
import { render } from "less";
const { TextArea } = Input;
const Project = (props) => {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const projectList = useSelector((state) => state.project);
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  const [form] = Form.useForm();


  const handleAddProject = () => {
    let index=projectList.findIndex((val) => {
      return val.projectName === "未填写项目名称";
    })
    console.log(index);;
    if (
      index < 0
    ) {
      console.log('可以创建');
      dispatch(add_projectAction({ projectName: "未填写项目名称" }));
    } else {
      //禁止创建新的背景
      console.log('不可以创建');
      setVisible(true);
    }
  };
  let showList = [];

  if (projectList && projectList.length > 0) {
    showList = projectList.map((val) => {
      console.log(val);
      return (
        <MyDragPanel id={val.projectName} key={val.projectName}>
          <ProjectItem
            key={val.projectName}
            projectInfo={val}
          ></ProjectItem>
        </MyDragPanel>
      );
    });
  }

  return (
    <div className="Project">
      <MyCard
        style={{ margin: "10px" }}
        title="项目经验"
        bordered={true}
        showArrow={true}
      >
        {showList}
        <span className="addProject" onClick={handleAddProject}>
          <a>添加新的项目经历</a>
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
export default Project;
