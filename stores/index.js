import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
  state: () => {
    return {
      token: '',
    }
  },
  persist: {
    key: 'user',
    storage: persistedState.cookies
  }
})
