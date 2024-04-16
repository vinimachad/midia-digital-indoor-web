import { Lock } from 'lucide-react'
import styles from './styles.module.scss'
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import { VariantProps, tv } from 'tailwind-variants'
import { DragEventHandler, useState } from 'react'
import { AspectRatio } from '@components/ui/aspect-ratio'
import { Skeleton } from '@components/ui/skeleton'

export const dropzoneVariants = tv({
  base: styles.baseStatus,
  variants: {
    state: {
      uploaded: styles.uploaded,
      toUpload: styles.toUpload,
      blocked: styles.blocked,
      failed: styles.failed,
      onFocus: styles.onFocus,
      pendingAnalysis: styles.pendingAnalysis
    }
  }
})

export type DropzoneStates = VariantProps<typeof dropzoneVariants>['state']

interface Props extends VariantProps<typeof dropzoneVariants> {
  isSkeleton: boolean
  previewUrl?: string
  newUploadAvailable?: boolean
  onDrop?: <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void
  onDragEnter?: DragEventHandler<HTMLElement>
  onDragLeave?: DragEventHandler<HTMLElement>
  onSuccessAcceptFile?: (file: File) => void
  onShowUploadCommercialUnavailable?: () => void
}

export default function DropZone({
  state,
  previewUrl,
  isSkeleton = false,
  newUploadAvailable,
  onDrop,
  onDragEnter,
  onDragLeave,
  onSuccessAcceptFile,
  onShowUploadCommercialUnavailable
}: Props) {
  const [dropzoneState, setDropzoneState] = useState(state)

  const acceptedFileTypes = {
    'image/jpeg': ['.jpeg', '.jpg'],
    'image/png': ['.png'],
    'image/webp': ['.webp']
  }

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: acceptedFileTypes,
    disabled: state === 'blocked',
    onDrop: onDrop ? onDrop : didDrop,
    onDragEnter: onDragEnter ? onDragEnter : didDragEnter,
    onDragLeave: onDragLeave ? onDragLeave : didDragLeave
  })

  function didDragEnter() {
    setDropzoneState('onFocus')
  }

  function didDragLeave() {
    setDropzoneState(state)
  }

  function didDrop<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) {
    if (fileRejections.length > 0) setDropzoneState('failed')

    if (
      (state === 'toUpload' || state === 'pendingAnalysis') &&
      !newUploadAvailable &&
      onShowUploadCommercialUnavailable
    ) {
      onShowUploadCommercialUnavailable()
      setDropzoneState(state)
      return
    }

    if (acceptedFiles.length > 0 && onSuccessAcceptFile) {
      onSuccessAcceptFile(acceptedFiles[0])
    }
  }

  return (
    <>
      {isSkeleton ? (
        <div className="flex h-full flex-1 flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-200">
          <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
            <Skeleton className="h-[40px] w-[40px] " />
            <Skeleton className="h-4 w-[30%]" />
            <Skeleton className="h-4 w-[50%]" />
            <Skeleton className="h-4 w-[40%]" />
          </div>
        </div>
      ) : (
        <button
          className={dropzoneVariants({ state: dropzoneState })}
          disabled={state === 'blocked'}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {state === 'blocked' && <Lock />}
          {previewUrl ? (
            <AspectRatio ratio={16 / 9}>
              <img src={previewUrl} className={styles.uploadPreview} />
            </AspectRatio>
          ) : (
            <p className={styles.text}>
              {state === 'blocked' && 'Para adicionar uma nova propaganda é preciso atualizar o seu plano'}
              {state === 'toUpload' && 'Arraste e solte ou clique para adicionar uma propaganda'}
            </p>
          )}
        </button>
      )}
    </>
  )
}
