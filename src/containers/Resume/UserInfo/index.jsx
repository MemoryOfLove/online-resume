import React, { useState } from "react";
import { Card, Form, Input, Row, Col, Space, Select, DatePicker } from "antd";
import MyButton from "../../common/MyButton";
import MyCard from "../../common/MyCard";
import "./index.less";
import Avatar from "../../common/Avatar";
import { update_userInfo } from "../../../redux/actions";
import { connect } from "react-redux";

const { Option } = Select;
const UserInfo = (props) => {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
  const [form] = Form.useForm();
  console.log(props.updateInfo);
  const {updateInfo,userInfo} = props;


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
           updateInfo(values);
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
    name: {
      rules: [{ type: "string", required: true, message: "请输入姓名!" }],
    },
    job: {
      rules: [{ type: "string", required: true, message: "请输入期望职位!" }],
    },
    birthday: {
      rules: [{ required: true, message: "请输入生日" }],
    },
    tel: {
      rules: [{ required: true, message: "请输入电话" }],
    },
  };
  return (
    <div className="userInfo">
      <MyCard
        style={{ margin: "10px" }}
        title="个人信息"
        bordered={true}
        showArrow={true}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row justify="space-around">
            <Col span={11}>
              <Form.Item name="name" label=" 姓名" {...config.name}>
                <Input disabled={disable}></Input>
              </Form.Item>
            </Col>

            <Col span={11}>
              <Avatar></Avatar>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={11}>
              <Form.Item name="job" label="期望职位" {...config.job}>
                <Input disabled={disable}></Input>
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item name="sex" label="性别" {...config.sex}>
                <Select
                  style={{ width: "100%" }}
                  disabled={disable}
                  placeholder="请选择性别"
                >
                  <Option value="Male">男</Option>
                  <Option value="Female">女</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={11}>
              <Form.Item name="date" label=" 参加工作日期" {...config.date}>
                <DatePicker
                  picker="month"
                  style={{ width: "100%" }}
                  disabled={disable}
                />
              </Form.Item>
            </Col>

            <Col span={11}>
              <Form.Item name="birthday" label=" 生日" {...config.birthday}>
                <DatePicker
                  picker="month"
                  style={{ width: "100%" }}
                  disabled={disable}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={11}>
              <Form.Item name="email" label=" 邮箱" {...config.email}>
                <Input disabled={disable}></Input>
              </Form.Item>
            </Col>

            <Col span={11}>
              <Form.Item name="tel" label=" 电话" {...config.tel}>
                <Input disabled={disable}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={11}>
              <Form.Item name="weixin" label="微信号" {...config.weixin}>
                <Input disabled={disable}></Input>
              </Form.Item>
            </Col>

            <Col span={11}>
              <Form.Item name="city" label="期望工作城市" {...config.city}>
                <Input disabled={disable}></Input>
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
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return ownProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateInfo: (val) => {
      console.log("update_userInfo",update_userInfo)
      dispatch(update_userInfo(val))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
