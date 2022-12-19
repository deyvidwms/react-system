import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './pages/App';
import Login from './pages/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode>
);
