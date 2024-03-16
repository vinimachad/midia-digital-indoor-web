import PresentationChart from '@components/charts/line'
import { Button } from '@components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'

export default function Overview() {
  return (
    <section className="h-full w-full">
      <Header />
      <Tabs defaultValue="statistics" className="my-3 h-full w-full">
        <TabsList>
          <TabsTrigger value="statistics">Estatísticas</TabsTrigger>
          <TabsTrigger value="commercials">Propagandas</TabsTrigger>
        </TabsList>
        <TabsContent value="statistics">
          <div className="grid min-h-full w-full grid-cols-1 grid-rows-2">
            <div className="h-[400px]">
              <PresentationChart />
            </div>
            <div className="bg-slate-300"></div>
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
