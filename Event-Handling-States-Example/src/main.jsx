import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  //React.StrictMode is just a wrapper which is used while devloping, it prevent from mistakes which are to be done while implementation, it shows warnings and all
  <StrictMode>
    <App />
  </StrictMode>,
)
