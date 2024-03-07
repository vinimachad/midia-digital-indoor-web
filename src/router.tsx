import ErrorPage from './error-page'
import SlidePage from '@pages/slides'
import LoginPage from '@pages/auth/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from '@pages/auth/register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SlidePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/cadastrar',
    element: <RegisterPage />
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
