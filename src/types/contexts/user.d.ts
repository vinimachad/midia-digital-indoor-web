import { User } from '@/models/user/user'

export declare module UserContext {
  export interface Context {
    user: (User.Infos & { access_token: string }) | undefined
  }
  export interface ProviderProps {
    children: React.ReactNode
  }
}
