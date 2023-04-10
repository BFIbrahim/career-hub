import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'


const route = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
