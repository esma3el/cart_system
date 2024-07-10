import { defineStore } from 'pinia'

export const useNotification = defineStore('notification', {
    state: () => {
        return {
            visible: false,
            message: "",
            type: ""
        }
    },
    actions: {
        show(message, type) {
            this.visible = true
            this.message = message
            this.type = type
            this.close()
        },
        close() {
            setTimeout(() => {
                this.visible = false
                this.message = ""
                this.type = ""
            }, 2000);
        },
    }
})