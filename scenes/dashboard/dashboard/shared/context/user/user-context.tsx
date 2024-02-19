'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { UserContext } from './types'
import { getUserAction } from '../../actions/get-user-action'
import { User } from '@/models/user/user'
import { useRouter } from 'next/navigation'
import deleteCookiesAction from '../../actions/delete-cookies-action'

const UserContext = createContext<UserContext.Context>({} as UserContext.Context)

export function UserProvider({ children }: UserContext.ProviderProps) {
  const [user, setUser] = useState<(User.Infos & { access_token: string }) | undefined>()
  const router = useRouter()

  useEffect(() => {
    _getUser()
  }, [])

  async function _getUser() {
    const { value, error, access_token } = await getUserAction()
    if (value) return setUser({ ...value, access_token })
    if (error) {
      await deleteCookiesAction()
      router.push('/dashboard/login')
    }
  }

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUser() {
  return useContext(UserContext)
}
