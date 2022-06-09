import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리액트 프로젝트에 리덕스를 주입해줄 프로바이더를 불러옴!
import { Provider } from "react-redux";
// 연결할 스토어.
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();