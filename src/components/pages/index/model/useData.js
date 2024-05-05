import {watch} from "vue";
import { storeToRefs } from 'pinia'

export function useData(storeCurrency, storeLogs) {
  const {
    list,
    selectedCurrencyId,
    selectedCurrency
  } = storeToRefs(storeCurrency)

  const {
    logs
  } = storeToRefs(storeLogs)

  watch(() => selectedCurrency.value, (newVal, prevVal) => {
    storeLogs.createLog({prevVal, newVal})
  })
  return {
    list,
    logs,
    selectedCurrencyId,
  }
}
