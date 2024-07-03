<template>

    <router-view v-slot="{ Component }">
        <transition  name="fade">
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

