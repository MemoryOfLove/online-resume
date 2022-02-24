import React, { useState } from "react";
import MyDragPanel from "../../../common/MyDragContainer/MyDragPanel";
import MyCard from "../../../common/MyCard";
import { Card, Form, Input, Row, Col, Space, Select, DatePicker } from "antd";
import MyButton from "../../../common/MyButton";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";
import {
  del_educationAction,
  update_educationAction,
} from "../../../../redux/actions";


const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function EducationItem(props) {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const [form] = Form.useForm();
  const { schoolName, schoolStage, time, major, experience } =
    props.educationInfo;

  const educationList = useSelector((state) => {
    return state.educationBackground.find((val) => {
      return val.schoolName === schoolName;
    });
  });
  console.log(educationList);
  const dispatch = useDispatch();


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
          dispatch(update_educationAction({
            index:schoolName,
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
    schoolName: {
      rules: [{ type: "string", required: true, message: "请输入学校名称!" }],
    },
    schoolStage: {
      rules: [{ type: "string", required: true, message: "请输入学历!" }],
    },
    time: {
      rules: [{ required: true, message: "请输入学习时间" }],
    },
    major: {
      rules: [{ type: "string", required: true, message: "请输入专业" }],
    },
    experience: {
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
        <span>{schoolStage ? schoolStage : "学历"}</span>
        <span className="divide-line"></span>{" "}
        <span>{major ? major : "专业"}</span>
        <span className="divide-line"></span>{" "}
        <span>{time ? formatTime(time) : "在校时间"}</span>
      </p>
    );
  };
  return (
    <MyCard title={schoolName} bordered={false} title2={title2()}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ schoolName, schoolStage, time, major, experience }}
      >
        <Row justify="space-around">
          <Col span={11}>
            <Form.Item
              name="schoolName"
              label=" 学校名称"
              {...config.schoolName}
            >
              <Input disabled={disable}></Input>
            </Form.Item>
          </Col>

          <Col span={11}>
            <Form.Item name="schoolStage" label="学历" {...config.schoolStage}>
              <Select
                style={{ width: "100%" }}
                disabled={disable}
                placeholder="请选择性别"
              >
                <Option value="初中及以下">初中及以下</Option>
                <Option value="中专/中技">中专/中技</Option>
                <Option value="高中">高中</Option>
                <Option value="本科">本科</Option>
                <Option value="硕士">硕士</Option>
                <Option value="博士">博士</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={11}>
            <Form.Item name="time" label="时间段" {...config.time}>
              <RangePicker
                style={{ width: "100%" }}
                disabled={disable}
                showTime={{ format: "YYYY-MM" }}
                format="YYYY-MM "
              />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="major" label="专业" {...config.major}>
              <Input disabled={disable} placeholder="请输入专业"></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={23}>
            <Form.Item
              name="experience"
              label=" 在校经历"
              {...config.experience}
            >
              <TextArea
                disabled={disable}
                rows={5}
                placeholder="请输入在校经历"
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
