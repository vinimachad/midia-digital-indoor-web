import styles from './styles.module.scss'
import { Button } from '@components/ui/button'

interface HeaderProps {
  onAddCommercial?: () => void
}

function Header({ onAddCommercial }: HeaderProps) {
  return (
    <div className={styles.container}>
      <h1 className="highlight">Mídia Digital Indoor</h1>
      <Button onClick={onAddCommercial}>Adicionar propaganda</Button>
    </div>
  )
}

export default Header
