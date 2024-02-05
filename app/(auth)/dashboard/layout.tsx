'use client'
import { AuthProvider } from '@/contexts/auth'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
