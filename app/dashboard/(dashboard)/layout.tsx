import Header from '@/scenes/dashboard/dashboard/shared/components/header'
import { UserProvider } from '@/scenes/dashboard/dashboard/shared/context/user/user-context'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <main className="flex items-center min-h-screen flex-col">
        <Header />
        <section className="max-w-screen-2xl w-full">{children}</section>
      </main>
    </UserProvider>
  )
}
