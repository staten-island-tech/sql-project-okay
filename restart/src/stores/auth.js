export const authStore = defineStore('auth', {
  state: () => {
    return {
      currentUser: null,
      location: null
    }
  },
  actions: {
    loadUser() {
      this.currentUser = supabase.auth.user()
    },
    clearUser() {
      this.currentUser = null
    }
  },
  getters: {
    isAuthenticated() {
      return !!this.currentUser
    }
  }
})
