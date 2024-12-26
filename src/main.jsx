import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import WrapperApp from "./WrapperApp";
import './styles/main.scss'
import 'boxicons/css/boxicons.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrapperApp />
  </StrictMode>
)
