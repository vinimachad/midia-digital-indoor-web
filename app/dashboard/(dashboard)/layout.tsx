import Header from '@/scenes/dashboard/dashboard/shared/components/header/header'
import { UserProvider } from '@/scenes/dashboard/dashboard/shared/context/user/user-context'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <main className="flex flex-1 items-center h-screen flex-col">
        <Header />
        <section className="h-full max-w-screen-2xl w-full">{children}</section>
      </main>
    </UserProvider>
  )
}
