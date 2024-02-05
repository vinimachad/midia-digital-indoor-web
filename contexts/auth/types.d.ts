import { User } from '@/models/user/user'
import { ReactNode } from 'react'

export namespace AuthContext {
  export type Context = {
    isAuthenticated: boolean
    user: User.Infos | null
    successUserAuthenticated(user: User.Infos & User.RefreshToken.Response)
  }

  export type ProviderProps = {
    children: ReactNode
  }
}
