import Header from '@components/header'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <section className="flex h-full w-full max-w-screen-2xl flex-1 py-8">
        <Outlet />
      </section>
    </main>
  )
}
