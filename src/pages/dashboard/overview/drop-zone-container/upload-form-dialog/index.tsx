import styles from './styles.module.css'
import Input from '@components/input/input'
import TextArea from '@components/input/textarea'
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

export default function UploadFormDialog({
  openDialog,
  onCloseDialog,
  file
}: {
  openDialog: boolean
  onCloseDialog: () => void
  file: File | null
}) {
  const previewUrl = file ? URL.createObjectURL(file) : null

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
        <form>
          <Input onTextChange={() => {}} placeholder="Título" />
          <TextArea onTextChange={() => {}} placeholder="Descrição" />
          {previewUrl && (
            <AspectRatio ratio={16 / 9}>
              <img src={previewUrl} className={styles.uploadPreview} />
            </AspectRatio>
          )}
        </form>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCloseDialog}>{'Cancelar upload'}</AlertDialogCancel>
          <AlertDialogAction onClick={onCloseDialog}>Enviar para análise</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
