import React, { useState } from "react";
import { Form, Input, Row, Col, Space } from "antd";
import MyButton from "../../common/MyButton";
import MyCard from "../../common/MyCard";
import "./index.less";
import Avatar from "../../common/Avatar";

const { TextArea } = Input;
export default function PersonalAdvantage() {
  const [disable, setIsDisable] = useState(true);
  const [showText, setShowText] = useState("编辑");
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


  return (
    <div className="personalAdvantage">
      <MyCard
        style={{ margin: "10px" }}
        title="个人优势"
        bordered={true}
        showArrow={true}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row justify="space-around">
            <Form.Item
              name="advantage"
              label=""
              {...config.advantage}
              style={{ width: "100%" }}
            >
              <TextArea
                disabled={disable}
                rows={5}
                placeholder="请输入个人优势"
                maxLength={350}
              />
            </Form.Item>
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
}
