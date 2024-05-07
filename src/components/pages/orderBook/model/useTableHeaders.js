import {ref, computed} from "vue";
import {useDisplay} from "vuetify";

export function useTableHeaders() {
  const display = ref(useDisplay())
  const bidsTableHeaders = computed(() => [
    {title: 'Price', key: 'price'},
    {title: 'Quantity', key: 'quantity'},
    {title: 'Total(Price * Quantity)', key: 'total', hide: display.value.smAndDown},
  ])
  const asksTableHeaders = computed(() =>[
    {title: 'Price', key: 'price'},
    {title: 'Quantity', key: 'quantity'},
    {title: 'Total(Price * Quantity)', key: 'total', hide: display.value.smAndDown},
  ])

  return {
    bidsTableHeaders,
    asksTableHeaders
  }
}
