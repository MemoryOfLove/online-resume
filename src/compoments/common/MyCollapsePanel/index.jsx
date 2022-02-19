import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import './index.less'
export default function MyCollapsePanel(props) {
  const {
    prefixCls = "MyCollapsePanel",
    className,
    extra,
    title,
    children,
    headStyle,
    collapse=false,
    bodyStyle={},
    bordered = false,
    showArrow = false,
    ...others
  } = props;




  const handleCollapse=()=>{
      console.log('点击箭头了');
  }
  const renderArrow = () => {
    return (
      <i
        onClick={handleCollapse}
        className={collapse ? "arrow-close" : "arrow-open"}
        aria-label="图标:arrow"
        tabIndex="-1"
      >
        <svg x="0px" y="0px" width="12px" height="6px" viewBox="0 0 12 6">
          <path
            fill="#DDDDDD"
            stroke="none"
            d="
                    M 12 0.35
                    Q 11.9 0.15 11.8 0.1 11.6 0 11.45 0
                    L 0.55 0
                    Q 0.3 0 0.15 0.15 0 0.3 0 0.5 0 0.7 0.15 0.85
                    L 5.6 5.85
                    Q 5.75 6 5.95 6 6.2 6 6.35 5.85
                    L 11.85 0.85
                    Q 11.95 0.75 12 0.6 12.05 0.45 12 0.35
                    M 5.95 4.8
                    L 1.85 1 10.2 1 5.95 4.8 Z"
          />

          <path
            fill="#C5C5C5"
            stroke="none"
            d="
                    M 1.85 1
                    L 5.95 4.8 10.2 1 1.85 1 Z"
          />
        </svg>
      </i>
    );
  };

  const collapsePanel = useRef(null);
  const [collapseOriginalHeight,setCollapseOriginalHeight]=useState('auto');
  useEffect(()=>{
    setCollapseOriginalHeight(`${collapsePanel.current.scrollHeight}px`);
  },[]);

  const header = (
    <div className={`${prefixCls}-head`} style={headStyle}>
      <div className={`${prefixCls}-head-wrapper`}>
        {title && (
          <div className={`${prefixCls}-head-title`}>
            <strong>{title}</strong>
          </div>
        )}
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
        {showArrow && (
          <div className={`${prefixCls}-arrow`}>{renderArrow()}</div>
        )}
      </div>
    </div>
  );
  const bodyClass=classNames({
    [`${prefixCls}-body`]:true,
    [`${prefixCls}-body-collapse`]:showArrow
  });
  const collapseStyle={
    height:collapse?'0px':`${collapseOriginalHeight}`,
  }
  const body=(
    <div className={bodyClass} style={bodyStyle,collapseStyle} ref={collapsePanel}>
      {children}
    </div>
  );
  return <div>
      {header}
      {body}
  </div>;
}
