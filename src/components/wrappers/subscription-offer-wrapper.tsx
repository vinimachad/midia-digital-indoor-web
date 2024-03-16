import { useAuth } from '@hooks/context/auth-context'

interface Props {
  element: React.ReactNode
}

export default function SubscriptionOfferWrapper({ element }: Props) {
  const { user } = useAuth()

  if (user?.subscription.status !== 'ACTIVE') {
    return (
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold text-slate-900">Escolha um dos nossos planos</h1>
          <p className="text-xl text-slate-600">E aumente visibilidade do seu negócio hoje!!</p>
        </div>
        <div className="grid h-full w-full flex-1 items-center">
          <stripe-pricing-table
            pricing-table-id={import.meta.env.VITE_STRIPE_TABLE_ID}
            publishable-key={import.meta.env.VITE_STRIPE_KEY}
            customer-email={user?.email}
          ></stripe-pricing-table>
        </div>
      </div>
    )
  }

  return element
}
