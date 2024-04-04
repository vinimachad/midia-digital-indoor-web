import { io } from 'socket.io-client'

export function createSocket() {
  return io(import.meta.env.VITE_BASE_URL)
}
