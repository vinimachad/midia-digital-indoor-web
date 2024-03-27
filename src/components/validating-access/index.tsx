import {} from '@radix-ui/react-icons'
import { Loader2 as Loader } from 'lucide-react'

export default function ValidatingAccess() {
  return (
    <section className="m-auto flex h-screen flex-1 flex-col items-center justify-center">
      <h1>Estamos validando seu acesso</h1>
      <p>Aguarde um instante, por favor!</p>
      <Loader className="animate-spin" />
    </section>
  )
}
