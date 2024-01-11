import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WhoAreWe from './components/Pages/WhoAreWe';
import WhyChooseRemedi from './components/Pages/WhyChooseRemedi';
import OurMission from './components/Pages/OurMission';
import OurStory from './components/Pages/OurStory';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Members from './components/Members';
import LogReg from './components/LogReg';
import Home1 from './components/Home1';
import Buy from './components/Buy';
import About1 from './components/About1';
import News1 from './components/News1';
import Home2 from './components/Home2';
import Expiry from './components/Expiry';
import About2 from './components/About2';
import News2 from './components/News2';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,

  },
  
{
    path:"/components/Home",
    element:<Home/>
  },
  {
    path:"/components/About",
    element:<About/>
  },
  {
    path:"/components/News",
    element:<News/>
  },
  {
    path:"/components/Pages/WhoAreWe",
    element:<WhoAreWe/>,
  },
  {
    path:"/components/Pages/WhyChooseRemedi",
    element:<WhyChooseRemedi/>
  },
  {
    path:"/components/Pages/OurStory",
    element:<OurStory/>
  },
  {
    path:"/components/Pages/OurMission",
    element:<OurMission/>
  },
  {
    path:"/components/Members",
    element:<Members/>
  },
  {
    path:"/components/LogReg",
    element:<LogReg/>
  },
  {
    path:"/components/Home1",
    element:<Home1/>
  },
  {
    path:"/components/Buy",
    element:<Buy/>
  },
  {
    path:"/components/News1",
    element:<News1/>
  },
  {
    path:"/components/About1",
    element:<About1/>
  },
  {
    path:"/components/Home2",
    element:<Home2/>
  },
  {
    path:"/components/Expiry",
    element:<Expiry/>
  },
  {
    path:"/components/News2",
    element:<News2/>
  },
  {
    path:"/components/About2",
    element:<About2/>
  },
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
