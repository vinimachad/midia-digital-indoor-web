export namespace User {
  export type Infos = {
    full_name: string
    phone_number: string
    email: string
  }

  export namespace CreateAccount {
    export type Request = Infos & { password: string }
    export type Response = Infos & { access_token: string; refresh_token: string }
  }

  export namespace Login {
    export type Request = Pick<Infos, 'email'> & { password: string }
    export type Response = Omit<Infos, 'phone_number'> & { access_token: string; refresh_token: string }
  }

  export namespace RefreshToken {
    export type Request = { refresh_token: string }
    export type Response = {
      access_token: string
      refresh_token: string
    }
  }
}
