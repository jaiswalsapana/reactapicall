import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cat from './assets/cat.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <App/>
 <Cat/>
  </StrictMode>,
)
