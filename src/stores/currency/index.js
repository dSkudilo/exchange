import {defineStore} from "pinia";

export const useCurrency = defineStore('currency', {
  state: () => ({
    list: [
      {id: 1, name: 'BTCUSDT'},
      {id: 2, name: 'BNBBTC'},
      {id: 3, name: 'ETHBTC'},
    ],
    selectedCurrencyId: 1
  }),

  getters: {
    selectedCurrency: (state) => state.list.find(e => e.id === state.selectedCurrencyId) || null
  }
})

