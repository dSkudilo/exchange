import {watch} from "vue";
import { storeToRefs } from 'pinia'

export function useData(
  storeCurrency,
  storeLogs,
  storeOrderBook
) {
  const {
    list,
    selectedCurrencyId,
    selectedCurrency
  } = storeToRefs(storeCurrency)

  const {
    logs
  } = storeToRefs(storeLogs)

  const {
    limit
  } = storeToRefs(storeOrderBook)

  watch(() => selectedCurrency.value, async (newVal, prevVal) => {
    storeLogs.createLog({prevVal, newVal})
    storeOrderBook.closeSocket()
    await storeOrderBook.getData({
      symbol: newVal.name,
      limit: limit.value
    })
    storeOrderBook.createAndSubscribeSocket(newVal.name)
  })
  return {
    list,
    logs,
    selectedCurrencyId,
  }
}
