import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Assignment1 from './Assignment1.jsx'
import Assignment2 from './Assignment2.jsx'
import Assignment3 from './Assignment3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Assignment1 /> */}
    {/* <Assignment2 /> */}
    <Assignment3 />
  </StrictMode>,
)
