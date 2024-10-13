import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login_Page from './Login/Login_Page.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import Report from './Report/Report.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatGPTComponent from './ChatGPT.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<App />
  </StrictMode>,
)
