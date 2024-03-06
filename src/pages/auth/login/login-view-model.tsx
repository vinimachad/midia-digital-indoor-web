import { z } from 'zod'
import { FormEvent, useCallback, useState } from 'react'
import useHandlerError from '@hooks/error/use-handler-error'
import { User } from '@type/user'
import userModel from '@models/user'
import { useNavigate } from 'react-router-dom'

const required_error = 'Este campo é obrigatório'
const loginSchema = z.object({
  email: z.string({ required_error }).email({ message: 'Formato de email inválido.' }),
  password: z.string({ required_error })
})
type LoginInput = z.infer<typeof loginSchema>

export default function LoginViewModel() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { handleZodError, inputErrors, handleResetInput, handleAPIError, handleResetAlert, alert } = useHandlerError()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const elements = event.target as EventTarget & { email: HTMLInputElement; password: HTMLInputElement }
    const data = { email: elements.email.value, password: elements.password.value }

    await _handleForm(data, async (user) => {
      setIsLoading(true)
      const { value, error } = await userModel.login(user)

      if (error) {
        handleAPIError(error)
      } else if (value) {
        navigate('/dashboard/overview')
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

  async function _handleForm(data: LoginInput, success: (user: User.Login.Request) => void) {
    try {
      success(await loginSchema.parseAsync(data))
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
