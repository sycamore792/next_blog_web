<template>

    <router-view v-slot="{ Component }">
        <transition  name="fade-slide">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<script>

export default {

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

