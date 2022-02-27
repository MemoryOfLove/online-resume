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
  del_workAction,
  update_workAction,
} from "../../../../redux/actions";


const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function WorkItem(props) {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const [form] = Form.useForm();
  const {companyName, workRole, time, workDescription } =
    props.workInfo;

  const workList = useSelector((state) => {
    return state.work.find((val) => {
      return val.companyName === companyName;
    });
  });

  const dispatch = useDispatch();
  const delCurrentProject=()=>{
    dispatch(del_workAction({ companyName: companyName }));
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
          dispatch(update_workAction({
            index:companyName,
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
    companyName: {
      rules: [{ type: "string", required: true, message: "请输入公司名称!" }],
    },
    workRole: {
      rules: [{ type: "string", required: true, message: "请输入职位!" }],
    },
    time: {
      rules: [{ required: true, message: "请输入工作时间" }],
    },
    workDescription: {
      rules: [{ type: "string", required: true, message: "请输入工作描述" }],
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
        <span>{workRole ? workRole : "职位"}</span>
        <span className="divide-line"></span>{" "}
        <span>{time ? formatTime(time) : "工作时间"}</span>
      </p>
    );
  };
  return (
    <MyCard 
    extra={<div onClick={delCurrentProject} style={{marginRight:'45px'}}><img src={deleteIcon} style={{width:'20px'}}></img></div>}
    title2={title2()}
    title={companyName} bordered={true} >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ companyName, workRole, time, workDescription}}
      >
        <Row justify="space-around">
          <Col span={11}>
            <Form.Item
              name="companyName"
              label=" 公司名称"
              {...config.companyName}
            >
              <Input disabled={disable}></Input>
            </Form.Item>
          </Col>

          <Col span={11}>
            <Form.Item name="workRole" label="职位" {...config.workRole}>
            <Input disabled={disable}></Input>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col span={23}>
            <Form.Item name="time" label="工作时间" {...config.time}>
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
              name="workDescription"
              label=" 工作描述"
              {...config.workDescription}
            >
              <TextArea
                disabled={disable}
                rows={5}
                placeholder="请输入详细信息"
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
