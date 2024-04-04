import { Lock } from 'lucide-react'
import styles from './styles.module.scss'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { VariantProps, tv } from 'tailwind-variants'

const variants = tv({
  base: styles.baseStatus,
  variants: {
    status: {
      uploaded: styles.uploaded,
      toUpload: styles.toUpload,
      blocked: styles.blocked
    }
  }
})

interface Props extends VariantProps<typeof variants> {}

export default function DropZone({ status }: Props) {
  const onDrop = useCallback(() => {}, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <button className={variants({ status })} {...getRootProps()} disabled={status === 'blocked'}>
      <input {...getInputProps()} />
      {status === 'blocked' && <Lock />}
      <p className={styles.text}>
        {status === 'blocked' && 'Para adicionar uma nova propaganda é preciso atualizar o seu plano'}
        {status === 'toUpload' && 'Arraste e solte ou clique para adicionar uma propaganda'}
      </p>
    </button>
  )
}
