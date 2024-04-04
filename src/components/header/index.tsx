import NavigationButton from '@components/link'
import HeaderViewModel from './header-view-model'
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from '@components/ui/command'
import { Avatar, AvatarFallback } from '@components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { Skeleton } from '@components/ui/skeleton'
import { UserIcon, CogIcon as ConfigIcon, CreditCardIcon, LogOutIcon } from 'lucide-react'
import DropOutDialog from '@components/drop-out-dialog'

export default function Header() {
  const { path, paths, email, getUserInitials, getUserName, userIsLoading, logout, openDialog, setOpenDialog } =
    HeaderViewModel()
  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-center border-b-[1px] border-slate-200 bg-white">
      <nav className="grid h-full w-full max-w-screen-2xl grid-cols-2">
        <ul className="flex h-full flex-row items-center gap-4">
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
          <ul className="flex h-full flex-row items-center justify-end gap-4">
            <li className="flex flex-col items-end justify-end">
              <h3 className="text-sm text-slate-800">{getUserName()} </h3>
              <h6 className="text-sm text-slate-800">{email}</h6>
            </li>
            <li>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem>
                          <UserIcon size={18} />
                          <span>Perfil</span>
                        </CommandItem>
                        <CommandItem>
                          <ConfigIcon size={18} />
                          <span>Configurações</span>
                        </CommandItem>
                        <CommandItem>
                          <CreditCardIcon size={18} />
                          <span>Ver meu plano</span>
                        </CommandItem>
                        <CommandSeparator />
                        <CommandItem onSelect={() => setOpenDialog(true)}>
                          <LogOutIcon size={18} />
                          <span>Sair</span>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Dialog openDialog={openDialog} logout={logout} closeDialog={() => setOpenDialog(false)} />
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

function Dialog({
  logout,
  closeDialog,
  openDialog
}: {
  openDialog: boolean
  closeDialog: () => void
  logout: () => void
}) {
  return (
    <DropOutDialog
      openDialog={openDialog}
      configs={{
        title: 'Você tem certeza de que deseja sair?',
        description: 'Se sair vai ter que logar novamente para acessar as informações das suas propagandas.',
        buttons: {
          cancel: { action: closeDialog },
          main: {
            title: 'Sair mesmo assim',
            action: logout
          }
        }
      }}
    />
  )
}
