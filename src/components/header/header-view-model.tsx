import '@utils/strings+utils'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@hooks/context/auth-context'

export default function HeaderViewModel() {
  const { user, userIsLoading } = useAuth()
  const { pathname } = useLocation()
  const paths = {
    overview: '/dashboard/overview',
    config: '/dashboard/configurations'
  }

  function getUserInitials() {
    const [name, lastName] = user?.full_name.split(' ') ?? ['', '']
    return name.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
  }

  function getUserName() {
    const [name, lastName] = user?.full_name.split(' ') ?? ['', '']
    return [name, lastName].join(' ').toCapitalize()
  }

  return {
    path: pathname,
    paths,
    email: user?.email,
    getUserInitials,
    getUserName,
    userIsLoading
  }
}
