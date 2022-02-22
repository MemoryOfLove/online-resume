import React, { useState } from "react";
import { Form, Input, Row, Col, Space } from "antd";
import MyButton from "../../common/MyButton";
import MyCard from "../../common/MyCard";
import "./index.less";
import Avatar from "../../common/Avatar";
import MyDragPanel from "../../common/MyDragContainer/MyDragPanel";
import MyDragContainer from "../../common/MyDragContainer";

const { TextArea } = Input;
export default function EducationBackground() {
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
    <div className="EducationBackground">
      <MyCard
        style={{ margin: "10px" }}
        title="教育背景"
        bordered={true}
        showArrow={true}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          
        <MyDragContainer>
            <MyDragPanel id="MyCard1">
                <div>test1</div>
              
            </MyDragPanel>
            <MyDragPanel id="MyCard2">
            <div>test2</div>
            </MyDragPanel>
          </MyDragContainer>

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
