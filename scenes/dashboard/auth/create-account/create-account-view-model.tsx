import z from 'zod'
import { User } from '@/models/user/user'
import useHandlerError from '../use-handler-error'
import { useCallback, useState } from 'react'
import { createAccount } from './actions'
import { useRouter } from 'next/navigation'

export default function CreateAccountViewModel() {
  // MARK: - Private properties

  const [_user, _setUser] = useState<User.CreateAccount.Request>({} as User.CreateAccount.Request)
  const router = useRouter()

  // MARK: - Public properties

  const [isLoading, setIsLoading] = useState(false)
  const { alert, inputErrors, handleZodError, handleAPIError, handleResetAlert, handleResetInput } = useHandlerError()

  // MARK: - Public methods

  const handleUpdate = useCallback((key: keyof User.CreateAccount.Request, value: string) => {
    handleResetAlert()
    handleResetInput(key)
    _setUser((prev) => {
      return { ...prev, [key]: value }
    })
  }, [])

  async function handleSubmit() {
    await _handleForm(async () => {
      setIsLoading(true)
      const { error, value } = await createAccount(_user)

      if (error) {
        handleAPIError(error)
      } else if (value) {
        router.push('/dashboard/overview')
      }

      setIsLoading(false)
    })
  }

  function findErrorByField(field: 'email' | 'password' | 'full_name' | 'phone_number') {
    return inputErrors?.find((i) => i?.field == field)
  }

  // MARK: - Private methods

  async function _handleForm(success: () => void) {
    const required_error = 'Este campo é obrigatório'
    const schema = z.object({
      full_name: z.string({ required_error }).min(3, { message: 'O nome precisa conter no minímo 3 digitos' }),
      phone_number: z.string({ required_error }).length(11, { message: 'Número inválido' }),
      email: z.string({ required_error }).email({ message: 'Formato de email inválido.' }),
      password: z
        .string({ required_error })
        .min(8, { message: 'A senha precisa conter no minímo 8 digitos' })
        .max(16, { message: 'A senha pode conter no máximo 16 digitos' })
    })

    try {
      await schema.parseAsync(_user)
      success()
    } catch (err: any) {
      const error = JSON.parse(err)
      handleZodError(error)
    }
  }

  return {
    alert,
    isLoading,
    findErrorByField,
    handleUpdateEmail: (value: string) => handleUpdate('email', value),
    handleUpdateFullName: (value: string) => handleUpdate('full_name', value),
    handleUpdatePhoneNumber: (value: string) => handleUpdate('phone_number', value),
    handleUpdatePassword: (value: string) => handleUpdate('password', value),
    handleSubmit
  }
}
