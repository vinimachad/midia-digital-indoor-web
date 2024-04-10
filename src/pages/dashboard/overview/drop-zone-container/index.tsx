import styles from './styles.module.scss'
import Dropzone from '@components/dropzone'
import { useState } from 'react'
import UploadFormDialog from './upload-form-dialog'

export default function DropZoneContainer() {
  const [openDialog, setOpenDialog] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  return (
    <>
      <div className={styles.dropzoneContainer}>
        <Dropzone
          state="toUpload"
          onSuccessAcceptFile={(file) => {
            setOpenDialog(true)
            setUploadedFile(file)
          }}
        />
        <Dropzone onSuccessAcceptFile={() => {}} state="blocked" />
        <Dropzone onSuccessAcceptFile={() => {}} state="blocked" />
      </div>
      <UploadFormDialog file={uploadedFile} openDialog={openDialog} onCloseDialog={() => setOpenDialog(false)} />
    </>
  )
}
