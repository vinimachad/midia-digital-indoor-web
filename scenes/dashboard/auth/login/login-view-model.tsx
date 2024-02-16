import { z } from 'zod'
import { User } from '@/models/user/user'
import { loginAction } from './server-actions/login-action'
import useHandlerError from '@/scenes/dashboard/auth/use-handler-error'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

const required_error = 'Este campo é obrigatório'
const loginSchema = z.object({
  email: z.string({ required_error }).email({ message: 'Formato de email inválido.' }),
  password: z.string({ required_error })
})

export default function LoginViewModel() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { handleZodError, inputErrors, handleResetInput, handleAPIError, handleResetAlert, alert } = useHandlerError()

  async function handleSubmit(data: FormData) {
    await _handleForm(data, async (user) => {
      setIsLoading(true)
      const { value, error } = await loginAction(user)

      if (error) {
        handleAPIError(error)
      } else if (value) {
        router.push('/dashboard')
      }

      setIsLoading(false)
    })
  }

  const handleUpdate = useCallback((key: keyof User.Login.Request) => {
    handleResetAlert()
    handleResetInput(key)
  }, [])

  function findErrorByField(field: keyof User.Login.Request) {
    return inputErrors?.find((i) => i?.field == field)
  }

  async function _handleForm(data: FormData, success: (user: User.Login.Request) => void) {
    const user = Object.fromEntries(data.entries())
    try {
      success(await loginSchema.parseAsync(user))
    } catch (err: any) {
      const error = JSON.parse(err)
      handleZodError(error)
    }
  }

  return {
    alert,
    isLoading,
    handleUpdate,
    handleSubmit,
    findErrorByField
  }
}
