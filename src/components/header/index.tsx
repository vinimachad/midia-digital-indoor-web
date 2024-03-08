import NavigationButton from '@components/link'
import HeaderViewModel from './header-view-model'
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '@components/ui/command'
import { Avatar, AvatarFallback } from '@components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { Skeleton } from '@components/ui/skeleton'

export default function Header() {
  const { path, paths, email, getUserInitials, getUserName, userIsLoading } = HeaderViewModel()
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
        {userIsLoading ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
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
        )}
      </nav>
    </header>
  )
}
