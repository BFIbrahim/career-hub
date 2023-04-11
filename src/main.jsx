import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'
import Applied from './Components/Applied Jobs/Applied'
import Blog from './Components/Blog/Blog'
import Error from './Components/error/Error'
import JobDetails from './Components/Jobdetails/JobDetails'


const route = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader:(() => fetch('Job-category.json'))
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

      },
      {
        path:'/details',
        element:<JobDetails></JobDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}></RouterProvider>
)
