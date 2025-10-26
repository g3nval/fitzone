// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App'; // App.jsx là file React chính
import reportWebVitals from './reportWebVitals';


// Redux setup (nếu bạn vẫn cần Redux, ví dụ cho state dùng chung)
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

// Tạo store Redux
const reduxStore = createStore(rootReducer);

// Tạo root React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render app
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Đo hiệu năng (tùy chọn)
reportWebVitals();
