import { CommercialData } from '@components/sliders/sliders-container'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'
import { createSocket } from '@lib/socket-io'
import linkModel from '@models/link-model'
import { useEffect, useState } from 'react'

export default function RealTimePreview() {
  const socket = createSocket()
  const [data, setData] = useState<CommercialData | null>()
  const noInformationLabel = 'Sem informação'

  useEffect(() => {
    socket.on('receive_updated_commercial', (data) => {
      if (data.kind === 'NEWS') {
        handleMetadata(data)
      } else {
        setData(data)
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  async function handleMetadata(data: CommercialData) {
    if (!data.preview) return

    const { value, error } = await linkModel.getMetadata(data.preview)
    if (error) return

    if (value) {
      const preview = value.images && value.images.length > 0 ? value.images[0] : undefined
      setData({
        ...data,
        title: value.title,
        description: value.description,
        preview
      })
    }
  }

  if (!data) return null

  return (
    <>
      <h1 className="mb-2 text-xl font-semibold text-slate-800">Detalhes em tempo real</h1>
      <section className="mb-4 rounded-md border border-slate-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Propaganda</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead>Tempo de apresentação</TableHead>
              <TableHead>Data</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="w-[100px] font-bold">{data.id.substring(0, 5)}</TableCell>
              <TableCell className="h-[150px] w-[266px]">
                {data.preview ? (
                  <img className="h-full w-full object-contain" src={data.preview} />
                ) : (
                  noInformationLabel
                )}
              </TableCell>
              <TableCell className="w-80 text-justify">{data.title ?? noInformationLabel}</TableCell>
              <TableCell>
                <p className="w-80 text-justify">{data.description ?? noInformationLabel}</p>
              </TableCell>
              <TableCell>{data.durationInSeconds} Segundos</TableCell>
              <TableCell>{data.updatedAt}</TableCell>
              {/*  28/03/2024 - 29:47:33 */}
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </>
  )
}
