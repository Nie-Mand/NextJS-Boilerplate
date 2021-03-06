import { io } from 'socket.io-client'
import { useEffect } from 'react'

const SocketProvider = ({ children, isListening }: Props) => {
  useEffect(() => {
    if (isListening) {
      const socket = io(process.env.NEXT_SOCKET_URL, {})

      socket.on('connect', function () {
        console.log('connected as', socket.id)
      })

      socket.on('event', () => {
        console.log('event')
      })

      return () => {
        socket.close()
      }
    }
  }, [isListening])

  return <>{children}</>
}
type Props = {
  children: JSX.Element | JSX.Element[]
  isListening: boolean
}

export default SocketProvider
