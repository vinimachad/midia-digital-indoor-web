import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Header from '../header'

export default function SubscriberView() {
  return (
    <>
      <Header />
      <Tabs defaultValue="statistics" className="w-full">
        <TabsList>
          <TabsTrigger value="statistics">Estatísticas</TabsTrigger>
          <TabsTrigger value="commercials">Propagandas</TabsTrigger>
        </TabsList>
        <TabsContent value="statistics"></TabsContent>
        <TabsContent value="commercials">Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}
