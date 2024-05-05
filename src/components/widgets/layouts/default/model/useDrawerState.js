import {ref, computed} from "vue";

export function useDrawerState() {
  const isOpen = ref(false)

  const openHandler = () => {
    isOpen.value = true
  }

  const closeHandler = () => {
    isOpen.value = false
  }

  const toggleHandler = () => {
    isOpen.value ? closeHandler() : openHandler()
  }

  const btnTitle = computed(() => isOpen.value ? 'Свернуть' : 'Развернуть')
  return {
    isOpen,
    toggleHandler,
    btnTitle
  }
}
