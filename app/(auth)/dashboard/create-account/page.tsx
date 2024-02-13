'use client'
import { Button } from '@/components/ui/button'
import useCreateAccount from './use-create-account'
import Input from '@/components/ui/input/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function CreateAccount() {
  const createAccountViewModel = useCreateAccount()

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
    <main className="overflow-x-hidden max-w-[100vw] bg-slate-100">
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <div className="form-container">
          {buildAlertIfNeeded()}
          <div className="w-full content-start">
            <h2 className="title-label">Preencha seus dados:</h2>
          </div>
          <form action={createAccountViewModel.handleSubmit} className="grid gap-4 w-full">
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
            <div className="flex items-center justify-center w-full">
              <span className="">Concordo com os termos de privacidade</span>
            </div>
            <Button isLoading={createAccountViewModel.isLoading} variant={'default'} size="lg" type="submit">
              Criar conta
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
