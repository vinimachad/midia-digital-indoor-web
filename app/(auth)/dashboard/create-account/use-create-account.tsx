import { CreateUserInfos } from '@/models/user/User'
import { useCallback, useState } from 'react'

export default function useCreateAccount() {
  const [user, setUser] = useState<CreateUserInfos>({} as CreateUserInfos)

  const handleUpdate = useCallback(
    (key: keyof CreateUserInfos, value: string) => {
      setUser((prev) => {
        return { ...prev, [key]: value }
      })
    },
    []
  )

  return {
    handleUpdateEmail: (value: string) => handleUpdate('email', value),
    handleUpdateFullName: (value: string) => handleUpdate('fullName', value),
    handleUpdatePhoneNumber: (value: string) =>
      handleUpdate('phoneNumber', value),
    handleUpdatePassword: (value: string) => handleUpdate('password', value)
  }
}
