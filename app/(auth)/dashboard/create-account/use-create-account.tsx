import z from 'zod'
import CreateAccountWorker from '@/services/workers/create-account-worker'
import { FormEvent, useCallback, useState } from 'react'
import useHandlerError from '../use-handler-error'

export default function useCreateAccount() {
  const worker = new CreateAccountWorker()
  const {
    alert,
    inputErrors,
    handleZodError,
    handleAPIError,
    handleResetAlert,
    handleResetInput
  } = useHandlerError()
  const [user, setUser] = useState<CreateAccount.Request>(
    {} as CreateAccount.Request
  )

  const handleUpdate = useCallback(
    (key: keyof CreateAccount.Request, value: string) => {
      handleResetAlert()
      handleResetInput(key)
      setUser((prev) => {
        return { ...prev, [key]: value }
      })
    },
    []
  )

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await _handleForm(async () => {
      const { error } = await worker.createAccount(user)
      if (error) return handleAPIError(error)
    })
  }

  async function _handleForm(success: () => void) {
    const required_error = 'Este campo é obrigatório'
    const schema = z.object({
      full_name: z
        .string({ required_error })
        .min(3, { message: 'O nome precisa conter no minímo 3 digitos' }),
      phone_number: z
        .string({ required_error })
        .length(11, { message: 'Número inválido' }),
      email: z
        .string({ required_error })
        .email({ message: 'Formato de email inválido.' }),
      password: z
        .string({ required_error })
        .min(8, { message: 'A senha precisa conter no minímo 8 digitos' })
        .max(16, { message: 'A senha pode conter no máximo 16 digitos' })
    })

    try {
      await schema.parseAsync(user)
      success()
    } catch (err: any) {
      const error = JSON.parse(err)
      handleZodError(error)
    }
  }

  function findErrorByField(
    field: 'email' | 'password' | 'full_name' | 'phone_number'
  ) {
    return inputErrors?.find((i) => i?.field == field)
  }

  return {
    alert,
    findErrorByField,
    handleUpdateEmail: (value: string) => handleUpdate('email', value),
    handleUpdateFullName: (value: string) => handleUpdate('full_name', value),
    handleUpdatePhoneNumber: (value: string) =>
      handleUpdate('phone_number', value),
    handleUpdatePassword: (value: string) => handleUpdate('password', value),
    handleSubmit
  }
}
