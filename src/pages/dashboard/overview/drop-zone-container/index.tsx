import styles from './styles.module.scss'
import Dropzone from '@components/dropzone'
import { useEffect, useState } from 'react'
import UploadFormDialog, { UploadRequest } from './upload-form-dialog'
import homesModel from '@models/user/homes-model'
import { Homes } from '@type/user/homes'

export default function DropZoneContainer() {
  const { getUploadMenu } = homesModel()
  const [openDialog, setOpenDialog] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [menu, setMenu] = useState<Homes.UploadMenu[]>([])

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

  async function didSubmitUploadAnalysis(data: UploadRequest) {}

  return (
    <>
      <div className={styles.dropzoneContainer}>
        {menu.map((item, index) => {
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
              key={index}
              state={state}
              onSuccessAcceptFile={(file) => {
                setOpenDialog(true)
                setUploadedFile(file)
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
