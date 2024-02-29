'use client'
import { useUser } from '../shared/context/user/user-context'
import SubscriptionOfferView from './components/not-subscriber-view'
import SubscriberView from './components/subscriber-view'

export default function Overview() {
  const { user } = useUser()
  if (!user) return <h1>Carregando...</h1>
  return (
    <section className="py-8 h-full">
      {user.subscription.status == 'ACTIVE' ? <SubscriberView /> : <SubscriptionOfferView />}
    </section>
  )
}
