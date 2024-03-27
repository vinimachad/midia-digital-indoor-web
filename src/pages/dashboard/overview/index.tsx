import PresentationChart from '@components/charts/presentation-chart'
import Dropzone from '@components/dropzone'
import { Button } from '@components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'

export default function Overview() {
  return (
    <section className="h-full w-full">
      <Header />
      <Tabs defaultValue="overview" className="my-3 h-full w-full">
        <TabsList>
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="commercials">Propagandas</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid w-full grid-cols-1 grid-rows-2 gap-y-8">
            <div className="flex flex-grow gap-4">
              <Dropzone status="toUpload" />
              <Dropzone status="blocked" />
              <Dropzone status="blocked" />
            </div>
            <div className="h-[333px]">
              <PresentationChart />
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
