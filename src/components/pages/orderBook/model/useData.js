import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {limitsList} from "./limitsList";

export function useData(store) {
  const limit = ref(limitsList[0])
  const symbol = 'BTCUSDT'

  const {
    asks,
    bids,
    isLoading,
  } = storeToRefs(store)


  onMounted(() => {
    store.getData({limit:100, symbol:'BTCUSDT'})
  })
  return {
    asks,
    bids,
    isLoading,
    limit
  }
}
