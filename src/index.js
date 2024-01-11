import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './common/Header';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import DatePolls from './pages/DatePolls';
import Mybooking from './pages/Mybooking';
import Mycontact from './pages/Mycontact';
let router=createBrowserRouter([
  {
    path:"/",
    element:<SignIn/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/datepolls",
    element:<DatePolls/>
  },
  {
    path:"/mybooking",
    element:<Mybooking/>
  },
  {
    path:"/mycontact",
    element:<Mycontact/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
