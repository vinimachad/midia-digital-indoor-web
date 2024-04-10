import Input from '@components/input/input'
import { Button } from '@components/ui/button'
import RegisterViewModel from './register-view-model'
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const createAccountViewModel = RegisterViewModel()

  function buildAlertIfNeeded() {
    if (createAccountViewModel.alert && createAccountViewModel.alert.show) {
      const alert = createAccountViewModel.alert
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
          <form onSubmit={createAccountViewModel.handleSubmit} className="grid w-full gap-4">
            <Input
              name="full_name"
              type="text"
              placeholder="Nome Completo"
              onTextChange={createAccountViewModel.handleUpdateFullName}
              error={createAccountViewModel.findErrorByField('full_name')}
            />
            <Input
              mask="phone"
              name="phone_number"
              placeholder="Celular com DDD"
              onTextChange={createAccountViewModel.handleUpdatePhoneNumber}
              error={createAccountViewModel.findErrorByField('phone_number')}
            />
            <Input
              name="email"
              placeholder="Email"
              onTextChange={createAccountViewModel.handleUpdateEmail}
              error={createAccountViewModel.findErrorByField('email')}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              supportingText="Crie uma senha entre 8 e 16 digitos"
              onTextChange={createAccountViewModel.handleUpdatePassword}
              error={createAccountViewModel.findErrorByField('password')}
            />
            <div className="flex w-full items-center justify-end">
              <Link to={'/login'} className="text-primary underline-offset-4 hover:underline">
                Já tenho uma conta
              </Link>
            </div>
            <Button isLoading={createAccountViewModel.isLoading} variant={'default'} size="lg" type="submit">
              Criar conta
            </Button>
            <Link to={'/register'} className="place-self-center text-primary underline-offset-4 hover:underline">
              Concordo com os termos de privacidade
            </Link>
          </form>
        </div>
      </div>
    </main>
  )
}
