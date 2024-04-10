import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from '@components/ui/alert-dialog'

interface Props {
  openDialog: boolean
  configs: {
    title: string
    description: string
    buttons: {
      cancel?: {
        title?: string
        action?: () => void
      }
      main: {
        title: string
        action: () => void
      }
    }
  }
}

export default function DropOutDialog({ configs, openDialog }: Props) {
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{configs.title}</AlertDialogTitle>
          <AlertDialogDescription>{configs.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={configs.buttons.cancel?.action}>
            {configs.buttons.cancel?.title ?? 'Cancelar'}
          </AlertDialogCancel>
          <AlertDialogAction onClick={configs.buttons.main.action}>{configs.buttons.main.title}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
