import { User } from '@type/user'
import userModel from '@models/user'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import cookies from '@lib/cookies'
import { useNavigate } from 'react-router-dom'

interface IAuthContext {
  isAuthenticated: boolean
  user: User.Infos | null
  setUserLoggedIn: (user: User.Infos) => void
  userIsLoading: boolean
}

const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User.Infos | null>(null)
  const isAuthenticated = user != null
  const [userIsLoading, setUserIsLoading] = useState(true)

  useEffect(() => {
    const accessToken = cookies.accessToken.get()
    const refreshToken = cookies.refreshToken.get()
    if (accessToken || refreshToken) {
      setUserIsLoading(true)
      userModel.validateUser().then((user) => {
        if (!user) {
          navigate('/login')
          return
        }
        setUserIsLoading(false)
        setUser(user)
      })
    } else {
      navigate('/login')
    }
  }, [])

  async function setUserLoggedIn(user: User.Infos) {
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ userIsLoading, isAuthenticated, user, setUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
