import Header from '@/scenes/dashboard/dashboard/components/shared/header'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center min-h-screen flex-col">
      <Header />
      <section className="max-w-screen-2xl w-full">{children}</section>
    </main>
  )
}
