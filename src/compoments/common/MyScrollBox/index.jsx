import React from 'react';
import './index.less';


function MyScrollBox({ children, maxHeight = 200, style = {}, innerStyle = {}, onScrollTop }) {
  function onScroll(e) {
    const _event = e.target || e.currentTarget;
    onScrollTop && onScrollTop(_event.scrollTop);
  }
  let _style = { ...style };
  if (maxHeight) {
    _style = { ..._style, maxHeight: `${maxHeight}` };
  }
  return (
    <div className="scroll-box-outer" style={_style} onScroll={onScroll}>
      <div className="scroll-box-hidden" style={{ maxHeight: `${maxHeight}px` }}>
        <div className="scroll-box-inter" style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MyScrollBox;