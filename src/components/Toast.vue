
<template>
    <transition name="toast">
        <div v-if="visible" class="toast" :data-type="type">
            <div class="toast-icon">
                <svg v-if="type === 'success'" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <svg v-else-if="type === 'error'" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
            </div>
            <div class="toast-content">
                <h4>{{ title }}</h4>
                <p>{{ message }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Toast",
    props: {
        message: String,
        title: String,
        type: String,
        visible: Boolean
    }
}
</script>

<style scoped>
.toast {

    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18rem;
    background-color: #1f2937;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    z-index: 9999;
}

.toast-icon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.75rem;
}

.toast-icon svg {
    width: 100%;
    height: 100%;
}

.toast-content {
    flex-grow: 1;
}

.toast-content h4 {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: #ffffff;
}

.toast-content p {
    margin: 0.25rem 0 0;
    font-size: 0.75rem;
    color: #d1d5db;
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
}

/* Type-specific styles */
.toast[data-type="success"] .toast-icon {
    color: #10b981;
}

.toast[data-type="error"] .toast-icon {
    color: #ef4444;
}

.toast[data-type="info"] .toast-icon {
    color: #3b82f6;
}
</style>
