import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'
import Applied from './Components/Applied Jobs/Applied'
import Blog from './Components/Blog/Blog'


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
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied Jobs',
        element: <Applied></Applied>
      },
      {
        path: 'blog',
        element: <Blog></Blog>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>,
)
