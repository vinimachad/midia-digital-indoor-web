import { getUserAction } from '@/scenes/dashboard/dashboard/shared/actions/get-user-action'
import refreshTokenAction from '@/scenes/dashboard/dashboard/shared/actions/refresh-token-action'
import Header from '@/scenes/dashboard/dashboard/shared/components/header/header'
import { UserProvider } from '@/scenes/dashboard/dashboard/shared/context/user/user-context'

export async function getUser(revalidate: boolean = false) {
  const { value, error } = await getUserAction(revalidate)
  if (value) return value
  console.log(error)
  if (error) {
    await refreshTokenAction(error)
    await getUser()
  }
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser(true)
  return (
    <UserProvider>
      <main className="flex flex-1 items-center h-screen flex-col">
        <Header user={user} />
        <section className="h-full max-w-screen-2xl w-full">{children}</section>
      </main>
    </UserProvider>
  )
}
