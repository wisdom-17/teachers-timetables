import { defineStore } from 'pinia'
import TimetableService from '@/services/Timetable'
import router from '@/router'

export const useTimetableStore = defineStore({
  id: 'timetable',
  state: () => ({
    timetable: null,
    isLoading: false,
    employeeID: null,
  }),
  getters: {},
  actions: {
    async getTimetable() {
      this.isLoading = true
      TimetableService.list(this.employeeID)
        .then((data) => {
          this.isLoading = false
          this.timetable = data.data.timetable
          router.push({ name: 'timetable' })
        })
        .catch((error) => {
          this.isLoading = false
          console.log(error)
        })
    },
  },
})
