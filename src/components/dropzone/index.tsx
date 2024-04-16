import { Lock } from 'lucide-react'
import styles from './styles.module.scss'
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import { VariantProps, tv } from 'tailwind-variants'
import { DragEventHandler, useState } from 'react'
import { AspectRatio } from '@components/ui/aspect-ratio'

const dropzoneVariants = tv({
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

interface Props extends VariantProps<typeof dropzoneVariants> {
  previewUrl?: string
  onDrop?: <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void
  onDragEnter?: DragEventHandler<HTMLElement>
  onDragLeave?: DragEventHandler<HTMLElement>
  onSuccessAcceptFile: (file: File) => void
}

export default function DropZone({ previewUrl, state, onDrop, onDragEnter, onDragLeave, onSuccessAcceptFile }: Props) {
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
    if (acceptedFiles.length > 0) {
      onSuccessAcceptFile(acceptedFiles[0])
    }
  }

  return (
    <button className={dropzoneVariants({ state: dropzoneState })} disabled={state === 'blocked'} {...getRootProps()}>
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
  )
}
