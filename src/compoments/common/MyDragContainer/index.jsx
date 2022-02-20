import React, { useEffect, useReducer } from "react";
import MyDragPanel from "./MyDragPanel";
import './index.less'
export const DragPanelContext = React.createContext();
export default function MyDragContainer(props) {
  const panelListInitialState = [];
  //在最后添加
  const handleAddPanels = (state, value) => {
    return [...state, ...value];
  };
  //交换两个拖拽panel
  const handleSwitchPanel = (state, value) => {
    const index0 = state.findIndex((val)=>{return val.props.id===value[0]});
    const index1 = state.findIndex((val)=>{return val.props.id===value[1]});
    if(index0===index1){
      return [...state];
    }
    const min=Math.min(index0,index1);
    const max=Math.max(index0,index1);

    return [...state.slice(0,min),state[max],...state.slice(min+1,max),state[min],...state.slice(max+1,state.length)];
  };
  //删除
  const handleDeletePanel = (state, value) => {
    state.delete(value);
    return [...state];
  };
  const panelListReducer = (state, action) => {
    switch (action.type) {
      case "addPanels":
        return handleAddPanels(state, action.value);
      case "switchPanel":
        return handleSwitchPanel(state, action.value);
      case "deletePanel":
        return handleDeletePanel(state, action.value);
      default:
        throw "action写错了";
    }
  };
  const { children } = props;

  children.map((val, index) => {
    console.log(val)
    //保证必须是MyDragPanel才可以
    if (val.type !== MyDragPanel) {
      throw "抱歉,本组件必须和MyDragPanel一起使用";
    }
  });

  const [panelList, dispach] = useReducer(panelListReducer, children);

  return (
    <div className="MyDragContainer">
      <DragPanelContext.Provider value={dispach}>
        {panelList}
      </DragPanelContext.Provider>
    </div>
  );
}
