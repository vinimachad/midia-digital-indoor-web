import LoginViewModel from './login-view-model'
import { Button } from '@components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert'
import Input from '@components/input/input'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const { alert, isLoading, errors, register, handleSubmit } = LoginViewModel()

  function buildAlertIfNeeded() {
    if (alert && alert.show) {
      return (
        <Alert variant={'destructive'}>
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )
    }
  }

  return (
    <main className="max-w-[100vw] overflow-x-hidden bg-slate-100">
      <div className="flex h-full min-h-screen w-full items-center justify-center">
        <div className="form-container">
          {buildAlertIfNeeded()}
          <div className="w-full content-start">
            <h2 className="title-label">Preencha seus dados:</h2>
          </div>
          <form onSubmit={handleSubmit} className="grid w-full gap-4">
            <Input name="email" placeholder="Email" register={register} error={errors.email} />
            <Input name="password" type="password" placeholder="Senha" register={register} error={errors.password} />
            <div className="flex flex-1 justify-between">
              <Link to={'/register'} className="text-primary underline-offset-4 hover:underline">
                Criar minha conta
              </Link>
              <Link to={'/dashboard/forgot-password'} className="text-primary underline-offset-4 hover:underline">
                Esqueceu a senha?
              </Link>
            </div>
            <Button isLoading={isLoading} variant={'default'} size="lg" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
