'use client'
import { Button } from '@/components/ui/button'
import useCreateAccount from './use-create-account'
import Input from '@/components/ui/input'

export default function CreateAccount() {
  const createAccountViewModel = useCreateAccount()

  return (
    <main className="overflow-x-hidden max-w-[100vw] bg-slate-100">
      <div className="flex items-center justify-center w-full h-full min-h-screen">
        <div className="form-container">
          <div className="w-full content-start">
            <h2 className="title-label">Preencha seus dados:</h2>
          </div>
          <form
            onSubmit={createAccountViewModel.handleSubmit}
            className="grid gap-4 w-full"
          >
            <Input
              type="text"
              placeholder="Nome Completo"
              onTextChange={createAccountViewModel.handleUpdateFullName}
            />
            <Input
              placeholder="Celular com DDD"
              onTextChange={createAccountViewModel.handleUpdatePhoneNumber}
            />
            <Input
              placeholder="Email"
              onTextChange={createAccountViewModel.handleUpdateEmail}
            />
            <Input
              type="password"
              placeholder="Senha"
              onTextChange={createAccountViewModel.handleUpdatePassword}
            />
            <div className="flex items-center justify-center w-full">
              <span className="">Concordo com os termos de privacidade</span>
            </div>
            <Button variant={'default'} size="lg" type="submit">
              Criar conta
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
