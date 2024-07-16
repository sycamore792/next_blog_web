// stores/toast.js
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
    state: () => ({
        message: '',
        title: '',
        type: 'success',
        visible: false,
        duration: 3000
    }),
    actions: {
        showToast({ message, title, type = 'success', duration = 3000 }) {
            this.message = message;
            this.title = title;
            this.type = type;
            this.duration = duration;
            this.visible = true;
            setTimeout(() => {
                this.visible = false;
            }, duration);
        }
    }
});
