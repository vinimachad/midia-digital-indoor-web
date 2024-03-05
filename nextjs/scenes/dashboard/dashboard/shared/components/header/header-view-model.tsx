import '@/utils/extension/string'
import { usePathname } from 'next/navigation'
import { User } from '@/models/user/user'

export default function HeaderViewModel(user: User.Infos | undefined) {
  const path = usePathname()
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
