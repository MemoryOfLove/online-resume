import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { composeWithDevTools } from 'redux';
import reducer from "./redux/reducers";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById("root")
);
