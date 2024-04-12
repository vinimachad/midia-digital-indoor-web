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
  title: z.string({ required_error }),
  description: z.string({ required_error })
})

type Inputs = z.infer<typeof inputSchema>

interface Props {
  openDialog: boolean
  onCloseDialog: () => void
  file: File | null
}

export default function UploadFormDialog({ openDialog, onCloseDialog, file }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: zodResolver(inputSchema) })
  const previewUrl = file ? URL.createObjectURL(file) : null

  function didSubmit(data: Inputs) {
    console.log(data)
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
          <Input name="title" placeholder="Título" className="input" register={register} />
          <textarea className="input" {...register('description')} />
          <p>{errors.description?.message}</p>
          {/* <TextArea onTextChange={() => {}} placeholder="Descrição" {...register('description')} /> */}
          {previewUrl && (
            <AspectRatio ratio={16 / 9}>
              <img src={previewUrl} className={styles.uploadPreview} />
            </AspectRatio>
          )}
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onCloseDialog}>{'Cancelar upload'}</AlertDialogCancel>
            <AlertDialogAction type="submit">Enviar para análise</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
