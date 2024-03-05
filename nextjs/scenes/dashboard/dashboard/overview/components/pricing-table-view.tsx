'use client'
import { HTMLAttributes } from 'react'
import { useUser } from '@/scenes/dashboard/dashboard/shared/context/user/user-context'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function PricingTableView(props: Props) {
  const { user } = useUser()
  return (
    <div className="grid items-center h-full" {...props}>
      <stripe-pricing-table
        pricing-table-id={process.env.STRIPE_TABLE_ID}
        publishable-key={process.env.STRIPE_KEY}
        customer-email={user?.email}
      ></stripe-pricing-table>
    </div>
  )
}
