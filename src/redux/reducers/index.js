const initState = {
  userInfo: ({
  }),
  persionalAdvantage: ({}),
};
const handleUpdate_persionalAdvantage = (state, value) => {
  console.log(state, value);
  state.persionalAdvantage = value;
  return { ...state };
};

const handleUpdate_userInfo = (state, value) => {
  console.log(state, value);
  state.userInfo = value;
  return { ...state };
};

export default function (state = initState, action) {
  switch (action.type) {
    case "update_userInfo":
      return handleUpdate_userInfo(state, action.value);
    case "update_personalAdvantage":
      return handleUpdate_persionalAdvantage(state, action.value);
    default:
      return state;
  }
}
