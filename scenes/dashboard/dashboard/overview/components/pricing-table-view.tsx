import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function PricingTableView(props: Props) {
  return (
    <div className="grid items-center h-full" {...props}>
      <stripe-pricing-table
        pricing-table-id={process.env.STRIPE_TABLE_ID}
        publishable-key={process.env.STRIPE_KEY}
      ></stripe-pricing-table>
    </div>
  )
}
