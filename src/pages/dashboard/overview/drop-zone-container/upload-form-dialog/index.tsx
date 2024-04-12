import styles from './styles.module.scss'
import TextArea from '@components/input/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction
} from '@components/ui/alert-dialog'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { z } from 'zod'
import Input from '@components/input/input'

const required_error = 'Este campo é obrigatório'
const inputSchema = z.object({
  title: z.string().min(1, required_error),
  description: z.string().min(1, required_error)
})

type Inputs = z.infer<typeof inputSchema>

interface Props {
  openDialog: boolean
  onCloseDialog: () => void
  file: File | null
}

export default function UploadFormDialog({ openDialog, onCloseDialog, file }: Props) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: zodResolver(inputSchema) })
  const previewUrl = file ? URL.createObjectURL(file) : null

  function didSubmit(data: Inputs) {
    reset()
    console.log(data)
  }

  function didClose() {
    reset()
    onCloseDialog()
  }

  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Detalhes da sua propaganda</AlertDialogTitle>
          <AlertDialogDescription>
            Adicione um título e uma descrição para sua propaganda, então poderemos realizar a análise da sua
            propaganda.
          </AlertDialogDescription>
          <AlertDialogDescription variant={'warn'}>
            A análise pode levar de 1 até 2 dias úteis para ser finalizada!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(didSubmit)}>
          <Input name="title" placeholder="Título" error={errors.title} register={register} />
          <TextArea
            className="h-20"
            name="description"
            placeholder="Descrição"
            error={errors.description}
            register={register}
          />
          {previewUrl && (
            <AspectRatio ratio={16 / 9}>
              <img src={previewUrl} className={styles.uploadPreview} />
            </AspectRatio>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel onClick={didClose}>{'Cancelar upload'}</AlertDialogCancel>
            <AlertDialogAction type="submit">Enviar para análise</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
