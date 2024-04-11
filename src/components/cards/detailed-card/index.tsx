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
      <span className="body highlight">Total de propagandas:</span>
      <h4 className="highlight">1</h4>
      <div className={twMerge(styles.separator, 'my-2')} />
      <div className={styles.col}>
        <div className="flex flex-col">
          <span className="body highlight">Resumo</span>
          <span className="small text-slate-600">Últimos 30 dias</span>
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
      <span className="body">{title}</span>
      <div className={twMerge(styles.separator, 'flex-1 border-dashed')} />
      <span className="body">{value} -</span>
    </div>
  )
}
