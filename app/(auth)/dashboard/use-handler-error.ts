import { APIError, ResponseError, ZodIssue } from '@/services/service-request/errors'
import { useState } from 'react'

type Alert = { show: boolean; title?: string; message?: string }
export type InputError = { field: string; message: string | undefined } | undefined

export default function useHandlerError() {
  // MARK: - Public properties

  const [alert, setAlert] = useState<Alert | null>(null)
  const [inputErrors, setInputErrors] = useState<InputError[]>()

  // MARK: - Public methods

  function handleResetAlert() {
    setAlert(null)
  }

  function handleResetInput(field: string) {
    setInputErrors((prev) => {
      return prev?.filter((i) => i?.field != field)
    })
  }

  function handleAPIError(error: ResponseError) {
    const { message, title } = error as APIError
    if (message || title) {
      setAlert({
        show: true,
        title,
        message
      })
    } else {
      setAlert({
        show: true,
        title: 'Opss.. Erro inesperado',
        message: 'Parece que ocorreu um problema com nosso serviço.'
      })
    }
  }

  function handleZodError(error: ZodIssue[]) {
    const issues = error.map((issue) => {
      if (issue.path) return { field: issue.path[0], message: issue.message }
    })
    setInputErrors(issues)
  }

  return {
    alert,
    inputErrors,
    handleAPIError,
    handleResetAlert,
    handleZodError,
    handleResetInput
  }
}
