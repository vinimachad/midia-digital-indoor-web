export namespace User {
  export type Infos = {
    full_name: string
    phone_number: string
    email: string
  }

  export namespace CreateAccount {
    export type Request = Infos & { password: string }
    export type Response = Infos & { token_jwt: string }
  }

  export namespace RefreshToken {
    export type Request = { token_jwt: string }
    export type Response = { refresh_token: string }
  }
}
