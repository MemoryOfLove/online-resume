import React from "react";
import MyButton from '../common/MyButton'
import { useNavigate } from "react-router-dom";
import './index.less'
const fileName = "未命名文档1";
export default function Header({style}) {
 const navigate = useNavigate();
  return (
    <div className="header-toorbar" style={style}>
      <MyButton size="middle" className="back-btn" onClick={()=>{   navigate(-1);}}>返回</MyButton>
      <span>{fileName}</span>
      <div className="action">
        <MyButton size="middle" className="inline">切换模板</MyButton>
        <MyButton size="middle" className="inline">下载</MyButton>
      </div>
    </div>
  );
}
