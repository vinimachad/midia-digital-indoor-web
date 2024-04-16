import DetailedCard from '@components/cards/detailed-card'
import styles from './styles.module.scss'
import PresentationChart from '@components/charts/presentation-chart'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { twMerge } from 'tailwind-merge'
import RealTimePreview from '@components/real-time-preview'
import UploadMenu from './upload-menu'
import Header from './header'
import { Toaster } from '@components/ui/toaster'

export default function Overview() {
  return (
    <section className={styles.full}>
      <Header />
      <Tabs defaultValue="overview" className={twMerge(styles.full, 'my-3')}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="commercials">Propagandas</TabsTrigger>
        </TabsList>
        <RealTimePreview />
        <TabsContent value="overview">
          <h4 className={twMerge('highlight', 'mb-2')}>Suas propagandas</h4>
          <div className={styles.overviewGrid}>
            <UploadMenu />
            <div className={styles.statisticsContainer}>
              <PresentationChart />
              <DetailedCard />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="commercials">Change your password here.</TabsContent>
      </Tabs>
      <Toaster />
    </section>
  )
}
