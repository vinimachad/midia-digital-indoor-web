import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="h-[72px]">
      <nav>
        <Button variant={'text'}>Configurações</Button>
        <Button>Visão geral</Button>
      </nav>
    </header>
  )
}
