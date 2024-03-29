import { twMerge } from 'tailwind-merge'
import styles from './styles.module.scss'

// interface DetailedCardProps {}

interface DetailLineProps {
  title: string
  value: string
}

export default function DetailedCard() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Total de propagandas:</h1>
      <span className={styles.emphasis}>1</span>
      <div className={twMerge(styles.separator, 'my-2')} />
      <div className={styles.col}>
        <div>
          <h2 className={styles.subtitle}>Resumo</h2>
          <span className={styles.description}>Últimos 30 dias</span>
        </div>
        <div className={styles.col}>
          <DetailLine title="Tempo de exibição (horas)" value="14h" />
          <DetailLine title="Vezes apresentadas no dia" value="43" />
        </div>
      </div>
    </div>
  )
}

export function DetailLine({ title, value }: DetailLineProps) {
  return (
    <div className={styles.detailLine}>
      <h1>{title}</h1>
      <div className={twMerge(styles.separator, 'flex-1 border-dashed')} />
      <span>{value} -</span>
    </div>
  )
}
