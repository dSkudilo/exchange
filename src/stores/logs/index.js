import {defineStore} from "pinia";
import dayjs from "dayjs";

export const useLogs = defineStore('logs', {
  state: () => ({
    logs: []
  }),

  actions: {
    createLog({prevVal, newVal}) {
      this.logs.push({
        prevVal, newVal, createdAt: dayjs().format('DD.MM.YYYY HH:mm')
      })
    }
  }
})
