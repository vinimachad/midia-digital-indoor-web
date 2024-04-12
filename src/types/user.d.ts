export namespace User {
  export type Request = {
    access_token: string
  }

  export type SubscriptionSummary = {
    status: string
    value?: number
    plan_type?: string
    period_end?: Date
    period_start?: Date
  }

  export type Infos = {
    id?: string
    full_name: string
    phone_number: string
    email: string
    subscription: SubscriptionSummary
  }

  export namespace CreateAccount {
    export type Request = Omit<Infos, 'subscription'> & { password: string }
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
