// 首页模块的入口文件
import React, { useEffect } from "react";
import "./index.less";
import Logo from "../../assets/logo.jpg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Introduction() {
  const navigate = useNavigate();
  return (
    <div className="root">
      <div className="container">
        <img src={Logo} alt="" />
        <div className="title">onlineResume</div>
        <div className="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <Button
          type="primary"
          onClick={() => {
            navigate("/home/");
          }}
        >
          开始
        </Button>
      </div>
    </div>
  );
}
export default Introduction;
