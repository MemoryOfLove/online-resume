import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import "./index.less";
import MyCollapsePanel from "../MyCollapsePanel";

export default function MyCard(props) {
  const {
    prefixCls = "MyCard",
    className,
    extra,
    headStyle = {},
    bodyStyle = {},
    showArrow = true,
    title,
    title2,
    bordered = true,
    size: customizeSize,
    type,
    cover,
    actions,
    children,
    hoverable,
    ...others
  } = props;
  let head;

  const [collapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse((value) => {
      return !value;
    });
  };

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

  if (title || extra) {
    head = (
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
        {title2 &&(
            <div className={`${prefixCls}-head-title2`}>
              {title2}
          </div>
          )}
      </div>
    );
  }
  function getAction(actions) {
    const actionList = actions.map((action, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
        <span>{action}</span>
      </li>
    ));
    return actionList;
  }
  const coverDom = cover ? (
    <div className={`${prefixCls}-cover`}>{cover}</div>
  ) : null;
  const bodyClass = classNames({
    [`${prefixCls}-body`]: true,
  });

  const body = (
    <MyCollapsePanel collapse={collapse}>
      <div className={bodyClass} style={bodyStyle}>
        {children}
      </div>
    </MyCollapsePanel>
  );
  const actionDom =
    actions && actions.length ? (
      <ul className={`${prefixCls}-actions`}>{getAction(actions)}</ul>
    ) : null;
  const classString = classNames(
    prefixCls,
    {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-hoverable`]: hoverable,
    },
    className
  );

  return (
    <div className={classString}>
      {head}
      {coverDom}
      {body}
      {actionDom}
    </div>
  );
}
