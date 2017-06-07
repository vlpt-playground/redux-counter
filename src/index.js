import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// Redux 관련 불러오기
import { createStore } from 'redux'
import reducers from './reducers';

// 스토어 생성
const store = createStore(reducers);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);