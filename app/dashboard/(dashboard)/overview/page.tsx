import Overview from '@/scenes/dashboard/dashboard/overview/page'
import { getUser } from '../layout'

export default async function OverviewPage() {
  const user = await getUser()
  return <Overview user={user} />
}
