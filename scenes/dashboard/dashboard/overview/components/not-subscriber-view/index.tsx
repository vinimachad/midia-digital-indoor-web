import PricingTableView from '../pricing-table-view'

export default function SubscriptionOfferView() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-slate-900">Escolha um dos nossos planos</h1>
        <p className="text-xl text-slate-600">E aumente visibilidade do seu negócio hoje!!</p>
      </div>
      <PricingTableView />
    </div>
  )
}
