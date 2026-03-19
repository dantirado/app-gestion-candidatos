import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { routerapp } from './routes/routerApp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routerapp)} />  
  </StrictMode>,
)
