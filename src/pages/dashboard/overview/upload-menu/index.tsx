import styles from './styles.module.scss'
import Dropzone, { DropzoneStates } from '@components/dropzone'
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
  const [isLoading, setIsLoading] = useState(true)
  const cardStateMapping: Record<Homes.UploadMenuStatus, DropzoneStates> = {
    ACTIVE: 'uploaded',
    BLOCKED: 'blocked',
    TO_UPLOAD: 'toUpload',
    PENDING_ANALYSIS: 'pendingAnalysis'
  }

  useEffect(() => {
    getUploadMenu().then((res) => {
      setIsLoading(false)
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
          const state = cardStateMapping[item.status]
          return (
            <Dropzone
              isLoading={isLoading}
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
