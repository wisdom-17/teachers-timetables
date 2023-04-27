import { axiosClient } from '@/services/Axios'

export default {
  list(employeeID) {
    return axiosClient.get(`/api/timetables/${employeeID}`)
  },
}
