import { setCookie } from 'nookies'
import { AuthContext } from './types'
import { createContext, useContext, useState } from 'react'
import { User } from '@/models/user/user'
import { useRouter } from 'next/navigation'

const Context = createContext<AuthContext.Context>({} as AuthContext.Context)

// MARK: - Provider

export function AuthProvider({ children }: AuthContext.ProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User.Infos | null>(null)
  const isAuthenticated = !!user

  function successUserAuthenticated(data: User.Infos & User.RefreshToken.Response) {
    setUser({ ...data })
    _setAuthenticationCookies(data.refresh_token)
  }

  function _setAuthenticationCookies(refresh_token: string) {
    setCookie(undefined, 'midia-digital-indoor.token', refresh_token, { maxAge: 60 * 60 * 1 })
    router.push('/dashboard')
  }

  return <Context.Provider value={{ user, isAuthenticated, successUserAuthenticated }}>{children}</Context.Provider>
}

// MARK: - Hook

export function useAuth() {
  return useContext(Context)
}
