const initState = {
  userInfo: {},
  persionalAdvantage: {},
  educationBackground: [],
  project: [],
  work:[],
};
const deepCopy = (data) => {
  if (typeof data !== "object" || data === null) {
    throw new TypeError("传入参数不是对象");
  }
  let newData = {};
  const dataKeys = Object.keys(data);
  dataKeys.forEach((value) => {
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
};

const handleUpdate_persionalAdvantage = (state, value) => {
  return {
    educationBackground: state.educationBackground,
    persionalAdvantage: value,
    project: state.project,
    userInfo: state.userInfo,
    work:state.work,
  };
};

const handleUpdate_userInfo = (state, value) => {
  console.log(state, value);
  return {
    educationBackground: state.educationBackground,
    persionalAdvantage: state.persionalAdvantage,
    userInfo: value,
    project: state.project,
    work:state.work,
  };
};

const handleAdd_education = (state, value) => {
  console.log(state, value);
  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    project: state.project,
    work:state.work,
    educationBackground: [...state.educationBackground, value],
  };
};

const handleDel_education = (state, value) => {
  const index = state.educationBackground.findIndex(
    (val) => val.schoolName === value.schoolName
  );
  console.log("delIndex", index);
  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    project: state.project,
    work:state.work,
    educationBackground: [
      ...state.educationBackground.slice(0, index),
      ...state.educationBackground.slice(
        index + 1,
        state.educationBackground.length
      ),
    ],
  };
};

const handleUpdate_education = (state, value) => {
  const index = state.educationBackground.findIndex(
    (val) => val.schoolName === value.index
  );

  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    project: state.project,
    work:state.work,
    educationBackground: [
      ...state.educationBackground.slice(0, index),
      value.value,
      ...state.educationBackground.slice(
        index + 1,
        state.educationBackground.length
      ),
    ],
  };
};
/* project相关 */
const handleAdd_project = (state, value) => {
  console.log(state, value);
  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    educationBackground: state.educationBackground,
    work:state.work,
    project: [...state.project, value],
  };
};

const handleDel_project = (state, value) => {
  const index = state.project.findIndex(
    (val) => val.projectName === value.projectName
  );
  console.log("delIndex", index);
  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    educationBackground: state.educationBackground,
    work:state.work,
    project: [
      ...state.project.slice(0, index),
      ...state.project.slice(index + 1, state.project.length),
    ],
  };
};

const handleUpdate_project = (state, value) => {
  const index = state.project.findIndex((val) => val.projectName === value.index);

  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    educationBackground: state.educationBackground,
    work:state.work,
    project: [
      ...state.project.slice(0, index),
      value.value,
      ...state.project.slice(index + 1, state.project.length),
    ],
  };
};



/* work相关 */
const handleAdd_work = (state, value) => {
  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    educationBackground: state.educationBackground,
    project:state.project,
    work: [...state.work, value],
  };
};

const handleDel_work = (state, value) => {
  const index = state.work.findIndex(
    (val) => val.companyName === value.companyName
  );
  console.log("delIndex", index);
  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    educationBackground: state.educationBackground,
    work:state.work,
    project:state.project,
    work: [
      ...state.work.slice(0, index),
      ...state.work.slice(index + 1, state.work.length),
    ],
  };
};

const handleUpdate_work = (state, value) => {
  const index = state.work.findIndex((val) => val.companyName === value.index);

  return {
    persionalAdvantage: state.persionalAdvantage,
    userInfo: state.userInfo,
    educationBackground: state.educationBackground,
    project:state.project,
    work: [
      ...state.work.slice(0, index),
      value.value,
      ...state.work.slice(index + 1, state.work.length),
    ],
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

    case "add_project":
      return handleAdd_project(state, action.value);
    case "update_project":
      return handleUpdate_project(state, action.value);
    case "del_project":
      return handleDel_project(state, action.value);

    case "add_work":
      return handleAdd_work(state, action.value);
    case "update_work":
      return handleUpdate_work(state, action.value);
    case "del_work":
      return handleDel_work(state, action.value);
    default:
      return state;
  }
}
