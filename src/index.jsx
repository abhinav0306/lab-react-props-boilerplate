import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from './Data';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App props={data} />   
    {/* change the above line - for interchaning between App and AppClass */}
    {/* <AppClass/> */}
  </React.StrictMode>
);

