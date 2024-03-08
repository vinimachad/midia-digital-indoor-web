import Header from '@components/header'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <main className="flex flex-1 items-center h-screen flex-col">
      <Header />
      <section className="h-full max-w-screen-2xl w-full">
        <Outlet />
      </section>
    </main>
  )
}
