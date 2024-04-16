import styles from './styles.module.scss'
import Dropzone, { DropzoneStates } from '@components/dropzone'
import { useEffect, useState } from 'react'
import UploadFormDialog, { UploadRequest } from './upload-form-dialog'
import homesModel from '@models/user/homes-model'
import { Homes } from '@type/user/homes'
import commercialModel from '@models/commercial'
import { useToast } from '@components/ui/use-toast'
import { AppErrorTypes } from '@type/app-error'

export default function UploadMenu() {
  const { toast } = useToast()
  const { getUploadMenu } = homesModel()
  const [isLoading, setIsLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [menu, setMenu] = useState<Homes.UploadMenu[]>([])
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)
  const [finishUploadTried, setFinishUploadTried] = useState(false)

  const cardStateMapping: Record<Homes.UploadMenuStatus, DropzoneStates> = {
    ACTIVE: 'uploaded',
    BLOCKED: 'blocked',
    TO_UPLOAD: 'toUpload',
    PENDING_ANALYSIS: 'pendingAnalysis'
  }

  useEffect(() => {
    handleGetUploadMenu()
  }, [finishUploadTried])

  async function handleGetUploadMenu() {
    setIsLoading(true)
    const { value } = await getUploadMenu()
    setIsLoading(false)
    if (value) setMenu(value)
  }

  async function didSubmitUploadAnalysis(data: UploadRequest) {
    if (selectedCardIndex != null && uploadedFile) {
      const formData = new FormData()
      formData.set('file', uploadedFile)
      formData.set('title', data.title)
      formData.set('description', data.description)
      formData.set('index', selectedCardIndex.toString())
      const { error } = await commercialModel.createAnalysis(formData)
      if (error) {
        const apiError = error as AppErrorTypes.APIError
        toast({
          variant: 'destructive',
          title: apiError.title,
          description: apiError.message
        })
      }
      setFinishUploadTried(true)
    }
  }

  return (
    <>
      <div className={styles.dropzoneContainer}>
        {isLoading ? (
          <>
            <Dropzone isSkeleton />
            <Dropzone isSkeleton />
            <Dropzone isSkeleton />
          </>
        ) : (
          menu.map((item) => {
            const state = cardStateMapping[item.status]
            return (
              <Dropzone
                state={state}
                key={item.index}
                previewUrl={item.url}
                isSkeleton={isLoading}
                onShowUploadCommercialUnavailable={() => {
                  toast({
                    variant: 'warn',
                    title: 'Upload indísponivel',
                    description:
                      'Para realizar um novo upload você precisa aguardar o tempo mínimo de 20 dias após o seu ultimo upload'
                  })
                }}
                onSuccessAcceptFile={(file) => {
                  setOpenDialog(true)
                  setUploadedFile(file)
                  setSelectedCardIndex(item.index)
                }}
              />
            )
          })
        )}
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
