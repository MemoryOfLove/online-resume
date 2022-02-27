import React, { useState } from "react";
import MyDragPanel from "../../../common/MyDragContainer/MyDragPanel";
import MyCard from "../../../common/MyCard";
import { Card, Form, Input, Row, Col, Space, Select, DatePicker } from "antd";
import MyButton from "../../../common/MyButton";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from '../../../../assets/deleteIcon.png'
import "./index.less";
import {
  del_projectAction,
  update_projectAction,
} from "../../../../redux/actions";


const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function ProjectItem(props) {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const [form] = Form.useForm();
  const { projectName, projectRole, time, projectDescription } =
    props.projectInfo;

  const projectList = useSelector((state) => {
    return state.project.find((val) => {
      return val.projectName === projectName;
    });
  });

  const dispatch = useDispatch();
  const delCurrentProject=()=>{
    dispatch(del_projectAction({ projectName: projectName }));
  }

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
          //修改redux
          dispatch(update_projectAction({
            index:projectName,
            value:values
          }))
          setShowText("修改");
          setIsDisable((value) => {
            return !value;
          });
        })
        .catch((errorInfo) => {
          console.log("校验出错", errorInfo);
        });
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const config = {
    projectName: {
      rules: [{ type: "string", required: true, message: "请输入项目名称!" }],
    },
    projectRole: {
      rules: [{ type: "string", required: true, message: "请输入项目角色!" }],
    },
    time: {
      rules: [{ required: true, message: "请输入持续时间" }],
    },
    projectDescription: {
      rules: [{ type: "string", required: true, message: "请输入个人经历" }],
    },
  };
  const formatTime = (timeArray) => {
    return `${moment(timeArray[0]).format("YYYY-MM")}-${moment(
      timeArray[1]
    ).format("YYYY-MM")}`;
  };
  const title2 = () => {
    return (
      <p className="title-two">
        <span>{projectRole ? projectRole : "项目角色"}</span>
        <span className="divide-line"></span>{" "}
        <span>{time ? formatTime(time) : "项目周期"}</span>
      </p>
    );
  };
  return (
    <MyCard 
    extra={<div onClick={delCurrentProject} style={{marginRight:'45px'}}><img src={deleteIcon} style={{width:'20px'}}></img></div>}
    title2={title2()}
    title={projectName} bordered={true} >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ projectName, projectRole, time, projectDescription}}
      >
        <Row justify="space-around">
          <Col span={11}>
            <Form.Item
              name="projectName"
              label=" 项目名称"
              {...config.projectName}
            >
              <Input disabled={disable}></Input>
            </Form.Item>
          </Col>

          <Col span={11}>
            <Form.Item name="projectRole" label="项目角色" {...config.projectRole}>
            <Input disabled={disable}></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={23}>
            <Form.Item name="time" label="项目周期" {...config.time}>
              <RangePicker
                style={{ width: "100%" }}
                disabled={disable}
                showTime={{ format: "YYYY-MM" }}
                format="YYYY-MM "
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={23}>
            <Form.Item
              name="projectDescription"
              label=" 项目描述"
              {...config.projectDescription}
            >
              <TextArea
                disabled={disable}
                rows={5}
                placeholder="请输入项目描述"
                maxLength={350}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Space>
            <MyButton style={{ marginRight: "20px" }} onClick={handleOnClick}>
              {showText}
            </MyButton>
          </Space>
        </Row>
      </Form>
    </MyCard>
  );
}
