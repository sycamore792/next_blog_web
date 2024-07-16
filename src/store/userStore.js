import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        username: '',
        email: '',
        loginCardVisible: false, // 控制登录卡片可见性的状态

    }),
    getters: {
        userFullName: (state) => `${state.firstName} ${state.lastName}`,
        // 可以添加更多的 getter
    },
    actions: {
        login(account, password) {
            this.isLoggedIn = true
            this.account = account
            this.password = password
            this.loginCardVisible = false
        },
        logout() {
            this.isLoggedIn = false
            this.username = ''
            this.password = ''
        },
        showLoginCard() {
            this.loginCardVisible = true
        },
        hideLoginCard() {
            this.loginCardVisible = false
        },
        toggleLoginCard() {
            this.loginCardVisible = !this.loginCardVisible
        }
    },
})
