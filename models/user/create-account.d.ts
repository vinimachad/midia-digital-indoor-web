declare module CreateAccount {
  type Request = {
    full_name: string
    phone_number: string
    email: string
    password: string
  }

  type Response = Omit<Request, 'password'> & { token_jwt: string }
}
