import axios from 'app/api'

export const createUser = (body: { message: string }) => axios.post('/', body)
