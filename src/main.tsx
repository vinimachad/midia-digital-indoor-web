import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Login from './pages/auth/login'
import SlidePage from './pages/slides'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SlidePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
