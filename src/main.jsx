import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";


import './Index.css'
import App from './App.jsx';
import './i18n'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
)
