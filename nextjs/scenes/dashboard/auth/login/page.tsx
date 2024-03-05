'use client'
import Input from '@/components/ui/input/input'
import LoginViewModel from './login-view-model'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function Login() {
  const { handleSubmit, alert, findErrorByField, handleUpdate, isLoading } = LoginViewModel()

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
    <main className="overflow-x-hidden max-w-[100vw] bg-slate-100">
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <div className="form-container">
          {buildAlertIfNeeded()}
          <div className="w-full content-start">
            <h2 className="title-label">Preencha seus dados:</h2>
          </div>
          <form action={handleSubmit} className="grid gap-4 w-full">
            <Input
              name="email"
              placeholder="Email"
              error={findErrorByField('email')}
              onTextChange={() => handleUpdate('email')}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              error={findErrorByField('password')}
              onTextChange={() => handleUpdate('password')}
            />
            <div className="flex flex-1 justify-end">
              <Link className="text-primary underline-offset-4 hover:underline" href={'/dashboard/forgot-password'}>
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