import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Registration from './Pages/Registration';
import Toolbar from './Pages/Toolbar';
import Guest from './Pages/hotelguest/Guest';
import HotelDetail from './Pages/HotelDetail';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/toolbar",
    element: <Toolbar />,
  },
  {
    path: "/guest",
    element: <Guest />,
  },
  {
    path: "/hotelDetail",
    element: <HotelDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
