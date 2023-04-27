import { axiosClient } from '@/services/Axios'

export default {
  async login(payload) {
    await axiosClient.get('/sanctum/csrf-cookie')
    return axiosClient.post('/login', payload)
  },
  logout() {
    return axiosClient.post('/logout')
  },
  getAuthUser() {
    return axiosClient.get('/api/users/auth')
  },
}
