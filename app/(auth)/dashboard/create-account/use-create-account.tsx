import CreateAccountWorker from '@/services/workers/create-account-worker'
import { FormEvent, useCallback, useState } from 'react'
import useHandlerError from '../use-handler-error'

export default function useCreateAccount() {
  const worker = new CreateAccountWorker()
  const { handleError, handleReset, alert } = useHandlerError()
  const [user, setUser] = useState<CreateAccount.Request>(
    {} as CreateAccount.Request
  )

  const handleUpdate = useCallback(
    (key: keyof CreateAccount.Request, value: string) => {
      handleReset()
      setUser((prev) => {
        return { ...prev, [key]: value }
      })
    },
    []
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { error, value } = await worker.createAccount(user)
    if (error) return handleError(error)
  }

  return {
    alert,
    handleUpdateEmail: (value: string) => handleUpdate('email', value),
    handleUpdateFullName: (value: string) => handleUpdate('full_name', value),
    handleUpdatePhoneNumber: (value: string) =>
      handleUpdate('phone_number', value),
    handleUpdatePassword: (value: string) => handleUpdate('password', value),
    handleSubmit
  }
}
