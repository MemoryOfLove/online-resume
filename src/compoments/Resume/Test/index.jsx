import React from 'react'
import MyDragPanel from '../../common/MyDragContainer/MyDragPanel';
import MyDragContainer from "../../common/MyDragContainer";
export default function Test() {
  return (
    <div>
        <MyDragContainer>
            <MyDragPanel draggable="true" id="A">A<button>a</button></MyDragPanel>
            <MyDragPanel id="B">B<button>a</button></MyDragPanel>
            <MyDragPanel id="C">C<button>a</button></MyDragPanel>
            <MyDragPanel id="D">D<button>a</button></MyDragPanel>
        </MyDragContainer>
    </div>
  )
}
