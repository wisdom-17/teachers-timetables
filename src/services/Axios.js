import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const apiURL = import.meta.env.VITE_BASE_API_URL

export const axiosClient = axios.create({
  baseURL: apiURL,
  withCredentials: true, // required to handle the CSRF token
})

/*
 * Add a response interceptor
 */
axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    const storeAuth = useAuthStore()
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      storeAuth.loggedInUser
    ) {
      storeAuth.logout()
    }
    return Promise.reject(error)
  }
)
