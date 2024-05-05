import {defineStore} from "pinia";
import baseAxios from "@/libs/axios";

export const useOrderBook = defineStore('orderBook', {
  state: () => ({
    asks: [],
    bids: [],
    isLoading: false
  }),

  actions: {
    async getData({limit,symbol}) {
      try {
        this.isLoading = true
        const {data} = await baseAxios.get('https://api.binance.com/api/v3/depth', {
          params: {
            limit,
            symbol
          }
        })
        this.asks = data.asks
        this.bids = data.bids

        this.isLoading = false
      } catch (e) {
        console.error(e)
      }
    }
  }
})
