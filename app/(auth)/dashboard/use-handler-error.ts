import {
  APIError,
  APIZodError,
  ResponseError
} from '@/services/service-request/errors'
import { useState } from 'react'

type Alert = { show: boolean; title?: string; message?: string }

export default function useHandlerError() {
  // MARK: - Public properties

  const [alert, setAlert] = useState<Alert | null>(null)

  // MARK: - Public methods

  function handleError(error: ResponseError) {
    switch (error.name) {
      case 'ZodError':
        _handleZodError(error as APIZodError)
        break
      case 'APIError':
        _handleAPIError(error as APIError)
        break
    }
  }

  function handleReset() {
    setAlert(null)
  }

  // MARK: - Private methods

  function _handleZodError(error: APIZodError) {
    // Todo
  }

  function _handleAPIError(error: APIError) {
    if (error.message || error.title) {
      setAlert({
        show: true,
        title: error.title,
        message: error.message
      })
    } else {
      setAlert({
        show: true,
        title: 'Opss.. Erro inesperado',
        message: 'Parece que ocorreu um problema com nosso serviço.'
      })
    }
  }

  return { alert, handleError, handleReset }
}
