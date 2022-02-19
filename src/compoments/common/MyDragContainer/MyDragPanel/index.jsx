import React, { useContext } from 'react'
import {DragPanelContext} from '../../MyDragContainer'
import './index.less'
export default function MyDragPanel(props) {
    const dispach=useContext(DragPanelContext);
    console.log(dispach);
    const {children,id,style}=props
    const handleDrag=(e)=>{
      console.log("onDrag",e);
    }
    const handleDragEnter=(e)=>{
      console.log("onDragEnter",e);
    }
    const handleDragStart=(e)=>{
      e.dataTransfer.setData('panelID',id);//保存数据--该img元素的id  
      console.log("onDragStart",id,e);
    }
    const handleOnDrop=(e)=>{
      const sourceID=e.dataTransfer.getData('panelID');
      const dstID=id;
      dispach({type:'switchPanel',value:[sourceID,dstID]})
      console.log("OnDrop");
      console.log()
    }
  return (
    <div 
    className='MyDragPanel' 
    style={style,{draggable:true}}
    onDragStart={handleDragStart} 
    onDragEnter={handleDragEnter}
    onDragOver={(e)=>{e.preventDefault()}}
    onDrop={handleOnDrop}
    >{children}</div>
  )
}
