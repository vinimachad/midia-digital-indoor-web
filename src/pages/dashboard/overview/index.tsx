import DetailedCard from '@components/cards/detailed-card'
import styles from './styles.module.scss'
import PresentationChart from '@components/charts/presentation-chart'
import Dropzone from '@components/dropzone'
import { Button } from '@components/ui/button'
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
              <DetailedCard />
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
