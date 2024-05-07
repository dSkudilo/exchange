import {onMounted, watch} from "vue";
import {storeToRefs} from "pinia";

export function useData(storeOrderBook, storeCurrency) {
  const {
    asks,
    bids,
    isLoading,
    limit,
  } = storeToRefs(storeOrderBook)

  const {selectedCurrency} = storeToRefs(storeCurrency)

  watch(() => limit.value, () =>
    storeOrderBook.getData({limit:limit.value, symbol: selectedCurrency.value.name})
  )

  onMounted(() => {
    if (asks.value.length === 0 && bids.value.length === 0) {
      storeOrderBook.getData({limit:limit.value, symbol: selectedCurrency.value.name})
      storeOrderBook.createAndSubscribeSocket(selectedCurrency.value.name)
    }
  })

  return {
    asks,
    bids,
    isLoading,
    limit,
  }
}
