import '@/utils/extension/string'
import { usePathname } from 'next/navigation'
import { useUser } from '../../context/user/user-context'

export default function HeaderViewModel() {
  const path = usePathname()
  const { user } = useUser()
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
    path,
    paths,
    email: user?.email,
    getUserInitials,
    getUserName
  }
}
