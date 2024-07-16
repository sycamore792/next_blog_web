<template>

    <router-view v-slot="{ Component }">
        <transition  name="fade-slide">
            <component :is="Component" />
        </transition>
    </router-view>
    <LoginCard></LoginCard>
    <Toast :message="toast.message" :title="toast.title" :type="toast.type" :visible="toast.visible"/>

</template>
<script>

import Toast from "@/components/Toast.vue";
import {useToastStore} from "@/store/toast";
import LoginCard from "@/components/LoginCard.vue";

export default {
    components: {LoginCard, Toast}
    , setup() {
        const toast = useToastStore()
        return {toast}
    }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
//.fade-slide-leave-active,
.fade-slide-enter-active {
    transition: all 0.5s;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>

