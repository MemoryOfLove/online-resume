const initState = {
  userInfo: {},
  persionalAdvantage: {},
  educationBackground: [],
};
const deepCopy=(data)=>{
  if(typeof data !== 'object' || data === null){
        throw new TypeError('传入参数不是对象')
    }
  let newData = {};
  const dataKeys = Object.keys(data);
  dataKeys.forEach(value => {
     const currentDataValue = data[value];
     // 基本数据类型的值和函数直接赋值拷贝 
     if (typeof currentDataValue !== "object" || currentDataValue === null) {
          newData[value] = currentDataValue;
      } else if (Array.isArray(currentDataValue)) {
         // 实现数组的深拷贝
        newData[value] = [...currentDataValue];
      } else if (currentDataValue instanceof Set) {
         // 实现set数据的深拷贝
         newData[value] = new Set([...currentDataValue]);
      } else if (currentDataValue instanceof Map) {
         // 实现map数据的深拷贝
         newData[value] = new Map([...currentDataValue]);
      } else { 
         // 普通对象则递归赋值
         newData[value] = deepCopy(currentDataValue);
      } 
   }); 
  return newData;
}


const handleUpdate_persionalAdvantage = (state, value) => {
  return { 
    educationBackground:state.educationBackground,
    persionalAdvantage:value,
    userInfo:state.userInfo  };
};

const handleUpdate_userInfo = (state, value) => {
  console.log(state,value)
  return { 
    educationBackground:state.educationBackground,
    persionalAdvantage:state.persionalAdvantage,
    userInfo:value 
  };
};

const handleAdd_education = (state, value) => {
  console.log(state,value)
  return { 
    persionalAdvantage:state.persionalAdvantage,
    userInfo:state.userInfo,
    educationBackground:[...state.educationBackground,value]
  };
};

const handleDel_education = (state, value) => {
  return { ...state };
};

const handleUpdate_education = (state, value) => {
  console.log(state,value)
  const index=state.educationBackground.findIndex((val)=>val.schoolName===value.index);

  return { 
    persionalAdvantage:state.persionalAdvantage,
    userInfo:state.userInfo,
    educationBackground:[...state.educationBackground.slice(0,index),value.value,...state.educationBackground.slice(index+1,state.educationBackground.length)]
  };
};


export default function (state = initState, action) {
  switch (action.type) {
    case "update_userInfo":
      return handleUpdate_userInfo(state, action.value);
    case "update_personalAdvantage":
      return handleUpdate_persionalAdvantage(state, action.value);

    case "add_education":
      return handleAdd_education(state, action.value);
    case "update_education":
      return handleUpdate_education(state, action.value);
    case "del_education":
      return handleDel_education(state, action.value);
    default:
      return state;
  }
}
