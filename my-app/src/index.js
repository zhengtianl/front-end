import React from 'react';
import ReactDOM from 'react-dom/client';
//应用的全局样式文件
import './index.css';
//引入根组件
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>

)
