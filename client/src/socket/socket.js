// import { io } from 'socket.io-client'

// //change
// const socket = io(
//   import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
// )

// export default socket
import { io } from 'socket.io-client'

const SOCKET_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const socket = io(SOCKET_URL)

export default socket