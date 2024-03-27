import styles from './styles.module.scss'
import PresentationChart from '@components/charts/presentation-chart'
import Dropzone from '@components/dropzone'
import { Button } from '@components/ui/button'
import { CommandSeparator } from '@components/ui/command'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { twMerge } from 'tailwind-merge'

export default function Overview() {
  return (
    <section className={styles.full}>
      <Header />
      <Tabs defaultValue="overview" className={twMerge(styles.full, 'my-3')}>
        <TabsList>
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="commercials">Propagandas</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className={styles.overviewGrid}>
            <div className={styles.dropzoneContainer}>
              <Dropzone status="toUpload" />
              <Dropzone status="blocked" />
              <Dropzone status="blocked" />
            </div>
            <div className={styles.statisticsContainer}>
              <PresentationChart />
              <div className={styles.card}>
                <h1 className={styles.title}>Total de propagandas:</h1>
                <span className={styles.emphasis}>1</span>
                <div className={twMerge(styles.separator, 'my-2')} />
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className={styles.subtitle}>Resumo</h2>
                    <span className={styles.description}>Últimos 30 dias</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className={styles.lineDetails}>
                      <h1>Tempo de exibição (horas)</h1>
                      <div className={twMerge(styles.separator, 'flex-1')} />
                      <span>14h -</span>
                    </div>
                    <div className={styles.lineDetails}>
                      <h1>Vezes apresentadas no dia</h1>
                      <div className={twMerge(styles.separator, 'flex-1')} />
                      <span>43 -</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="commercials">Change your password here.</TabsContent>
      </Tabs>
    </section>
  )
}

function Header() {
  return (
    <div className="flex flex-1 justify-between">
      <h1 className="text-4xl font-semibold text-slate-900">Mídia Digital Indoor</h1>
      <Button>Adicionar propaganda</Button>
    </div>
  )
}
