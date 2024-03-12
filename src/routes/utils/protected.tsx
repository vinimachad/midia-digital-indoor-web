import ValidatingAccess from '@components/validating-access'
import { useAuth } from '@hooks/context/auth-context'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const { isAuthenticated, userIsLoading } = useAuth()

  if (userIsLoading) {
    return <ValidatingAccess />
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />
  }

  return <Outlet />
}
