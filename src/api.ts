import axios from 'axios'

const client = axios.create({
  baseURL: process.env.NEXT_API_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}}`,
  },
})

export default client
