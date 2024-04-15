import z from 'zod'
import { useState } from 'react'
import useHandlerError from '@hooks/error/use-handler-error'
import { useNavigate } from 'react-router-dom'
import userModel from '@models/user/user'
import { useAuth } from '@hooks/context/auth-context'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import unmask from '@components/input/input/masks'

const requiredErrorMessage = 'Este campo é obrigatório'
const fullNameRegexExpression = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/
const phoneNumberRegexExpression = /^\(\d{2}\) \d \d{4}-\d{4}$/
const registerSchema = z.object({
  full_name: z.string().regex(fullNameRegexExpression, 'Digite o seu nome completo.'),
  phone_number: z.string().regex(phoneNumberRegexExpression, 'Número inválido.'),
  email: z.string().min(1, requiredErrorMessage).email('Formato de email inválido.'),
  password: z
    .string()
    .min(8, 'A senha precisa conter no minímo 8 digitos.')
    .max(16, 'A senha pode conter no máximo 16 digitos.')
})

type RegisterInputs = z.infer<typeof registerSchema>

export default function RegisterViewModel() {
  // MARK: - Private properties

  const { validateUser } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterInputs>({ resolver: zodResolver(registerSchema) })

  // MARK: - Public properties

  const [isLoading, setIsLoading] = useState(false)
  const { alert, handleResetAlert, handleAPIError } = useHandlerError()

  // MARK: - Public methods

  async function didSubmit(data: RegisterInputs) {
    handleResetAlert()
    data.phone_number = unmask(data.phone_number)
    setIsLoading(true)
    const { error, value } = await userModel.register(data)
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
    setValue,
    handleSubmit: handleSubmit(didSubmit)
  }
}
