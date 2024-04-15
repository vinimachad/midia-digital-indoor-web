import { User } from '@type/user/user'
import userModel from '@models/user/user'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import cookies from '@lib/cookies'
import { useNavigate } from 'react-router-dom'

interface IAuthContext {
  isAuthenticated: boolean
  user: User.Infos | null
  userIsLoading: boolean
  validateUser: () => Promise<void>
  logout: () => void
}

const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User.Infos | null>(null)
  const isAuthenticated = user != null
  const [userIsLoading, setUserIsLoading] = useState(true)

  useEffect(() => {
    validateUser()
  }, [])

  async function validateUser() {
    const accessToken = cookies.accessToken.get()
    const refreshToken = cookies.refreshToken.get()
    if (accessToken || refreshToken) {
      setUserIsLoading(true)
      userModel.validateUser().then((user) => {
        if (!user) {
          navigateToLogin()
          return
        }
        setUserIsLoading(false)
        setUser(user)
      })
    } else {
      navigateToLogin()
    }
  }

  function logout() {
    userModel.removeCookies()
    navigateToLogin()
  }

  function navigateToLogin() {
    navigate('/login', { replace: true })
  }

  return (
    <AuthContext.Provider value={{ userIsLoading, isAuthenticated, user, validateUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
