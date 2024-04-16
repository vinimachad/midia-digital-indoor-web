import styles from './styles.module.scss'
import Dropzone from '@components/dropzone'
import { useEffect, useState } from 'react'
import UploadFormDialog, { UploadRequest } from './upload-form-dialog'
import homesModel from '@models/user/homes-model'
import { Homes } from '@type/user/homes'
import commercialModel from '@models/commercial'

export default function UploadMenu() {
  const { getUploadMenu } = homesModel()
  const [openDialog, setOpenDialog] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [menu, setMenu] = useState<Homes.UploadMenu[]>([])
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)

  useEffect(() => {
    getUploadMenu().then((res) => {
      if (res.value) {
        setMenu(res.value)
      } else if (res.error) {
        console.log('occorreu um erro', res.error)
      }
      return
    })
  }, [])

  async function didSubmitUploadAnalysis(data: UploadRequest) {
    if (selectedCardIndex != null && uploadedFile) {
      const formData = new FormData()
      formData.set('file', uploadedFile)
      formData.set('title', data.title)
      formData.set('description', data.description)
      formData.set('index', selectedCardIndex.toString())
      await commercialModel.createAnalysis(formData)
    }
  }

  return (
    <>
      <div className={styles.dropzoneContainer}>
        {menu.map((item) => {
          let state: 'toUpload' | 'blocked' | 'uploaded' | 'failed' | 'onFocus' | 'pendingAnalysis' | undefined
          switch (item.status) {
            case Homes.UploadMenuStatus.TO_UPLOAD:
              state = 'toUpload'
              break
            case Homes.UploadMenuStatus.BLOCKED:
              state = 'blocked'
              break
            case Homes.UploadMenuStatus.PENDING_ANALYSIS:
              state = 'pendingAnalysis'
              break
            case Homes.UploadMenuStatus.ACTIVE:
              state = 'uploaded'
              break
          }

          return (
            <Dropzone
              state={state}
              key={item.index}
              previewUrl={item.url}
              onSuccessAcceptFile={(file) => {
                setOpenDialog(true)
                setUploadedFile(file)
                setSelectedCardIndex(item.index)
              }}
            />
          )
        })}
      </div>
      <UploadFormDialog
        file={uploadedFile}
        openDialog={openDialog}
        onCloseDialog={() => setOpenDialog(false)}
        onSubmit={didSubmitUploadAnalysis}
      />
    </>
  )
}
