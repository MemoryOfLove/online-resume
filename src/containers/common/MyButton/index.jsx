/**
 * @description 按钮组件
 */
 import React,{useState} from 'react';
 import classnames from 'classnames';
 import './index.less';
 
 function MyButton({ size = 'small', style, width, children, disabled, className, onClick, border = true }) {
   return (
     <div
       style={{
         ...style,
         width: width,
       }}
       className={classnames('es-button', {
         [`es-button-${size}`]: true,
         'es-button-disabled': disabled,
         'es-button-border': border,
         [`${className}`]:true
       })}
       onClick={() => {
         onClick && onClick();
       }}
     >
       {children}
     </div>
   );
 }
 
 export default MyButton;
 