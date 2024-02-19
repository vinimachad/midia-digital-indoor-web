'use client'
import NavigationButton from '../link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import HeaderViewModel from './header-view-model'

export default function Header() {
  const { path, paths, email, getUserInitials, getUserName } = HeaderViewModel()
  return (
    <header className="sticky top-0 z-50 w-full h-14 flex items-center justify-center border-b-[1px] border-slate-200 bg-white">
      <nav className="grid max-w-screen-2xl w-full h-full grid-cols-2">
        <ul className="flex flex-row h-full items-center gap-4">
          <li>
            <NavigationButton selected={path == paths.overview} href={paths.overview}>
              Visão geral
            </NavigationButton>
          </li>
          <li>
            <NavigationButton selected={path == paths.config} href={paths.config}>
              Configurações
            </NavigationButton>
          </li>
        </ul>
        <ul className="flex flex-row h-full items-center justify-end gap-4">
          <li className="flex flex-col justify-end items-end">
            <h3 className="text-sm text-slate-800">{getUserName()} </h3>
            <h6 className="text-sm text-slate-800">{email}</h6>
          </li>
          <li>
            <Avatar>
              <AvatarFallback>{getUserInitials()}</AvatarFallback>
            </Avatar>
          </li>
        </ul>
      </nav>
    </header>
  )
}
