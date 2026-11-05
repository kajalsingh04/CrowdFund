// import axios from 'axios'

// const api = axios.create({
//   //change
//   baseURL: `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/api`,
// })

// export default api
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: `${API_URL}/api`,
})

export default api