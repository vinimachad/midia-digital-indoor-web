import { z } from 'zod'
import { useState } from 'react'
import useHandlerError from '@hooks/error/use-handler-error'
import userModel from '@models/user'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@hooks/context/auth-context'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const requiredErrorMessage = 'Este campo é obrigatório'
const loginSchema = z.object({
  email: z.string().min(1, requiredErrorMessage).email('Formato de email inválido.'),
  password: z.string().min(1, requiredErrorMessage)
})
type LoginInput = z.infer<typeof loginSchema>

export default function LoginViewModel() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const { validateUser } = useAuth()
  const { alert, handleAPIError, handleResetAlert } = useHandlerError()
  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) })

  async function didSubmit(data: LoginInput) {
    handleResetAlert()
    setIsLoading(true)
    const { value, error } = await userModel.login(data)
    if (error) {
      handleAPIError(error)
    } else if (value) {
      validateUser().then(() => navigate('/dashboard/overview', { replace: true }))
    }

    setIsLoading(false)
  }

  return {
    alert,
    errors,
    isLoading,
    register,
    handleSubmit: handleSubmit(didSubmit)
  }
}
