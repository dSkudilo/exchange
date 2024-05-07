import {defineStore} from "pinia";
import baseAxios from "@/libs/axios";
import {filterArrItemByQuantity} from "./helpers";
import {LIMIT_LIST} from "@/constants/OREDER_BOOK";

export const useOrderBook = defineStore('orderBook', {
  state: () => ({
    asks: [],
    bids: [],
    limit: LIMIT_LIST[0],
    lastUpdateId: null,
    isLoading: false,

    socket: null,
  }),

  actions: {
    async getData({limit, symbol}) {
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
        this.lastUpdateId = data.lastUpdateId
        this.isLoading = false
      } catch (e) {
        console.error(e)
      }
    },

    closeSocket() {
      if (this.socket) this.socket.close()
    },

    createAndSubscribeSocket(symbol) {
      if (!symbol || typeof symbol !== "string") return
      this.socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`)
      this.socket.addEventListener("message", this.subscribeHandler)
    },

    subscribeHandler(message) {
      if (!message.data) return
      const data = JSON.parse(message.data)
      const condition = data.u <= this.lastUpdateId ||
        (data.U <= this.lastUpdateId + 1 && data.u >= this.lastUpdateId + 1)
      if (condition) return
      this.lastUpdateId = data.u

      const newBids = filterArrItemByQuantity(data.b)
      if (newBids.length > 0) this.bids = newBids.concat(this.bids)

      const newAsks = filterArrItemByQuantity(data.a)
      if (newAsks.length > 0) this.asks = newAsks.concat(this.asks)
    }
  }
})
