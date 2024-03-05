'use client'
import NavigationButton from '../link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import HeaderViewModel from './header-view-model'
import { User } from '@/models/user/user'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'

export default function Header({ user }: { user: User.Infos | undefined }) {
  const { path, paths, email, getUserInitials, getUserName } = HeaderViewModel(user)
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
            <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarFallback>{getUserInitials()}</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <div className="px-2 py-1.5 text-sm font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">shadcn</p>
                      <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
                    </div>
                  </div>
                  <CommandSeparator />
                  <CommandList>
                    <CommandGroup>
                      <CommandItem>
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem>
                        <span>Launch</span>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </nav>
    </header>
  )
}