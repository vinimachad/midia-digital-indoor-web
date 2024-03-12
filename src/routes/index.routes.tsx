import SlidePage from '@pages/slides'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from '@pages/auth/login'
import RegisterPage from '@pages/auth/register'
import Dashboard from '@pages/dashboard'
import AuthLayout from './layouts/AuthLayout'
import ProtectedRoute from './utils/protected'

const routes = () => {
  return (
    <Route>
      <Route path="/" element={<SlidePage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>
            <Route path="/dashboard/overview" element={<h1>Overview</h1>} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
}

const router = createBrowserRouter(createRoutesFromElements(routes()))

export default function AppRouter() {
  return <RouterProvider router={router} />
}
