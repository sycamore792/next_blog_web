<template>
    <div class="app">
        <div class="left">
            <Menu></Menu>
        </div>

        <div class="main">
            <router-view v-slot="{ Component }">
                <transition  name="fade-slide">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>

    </div>

</template>
<script>
import Menu from "@/components/Menu.vue";

export default {
    components: {
        Menu
    }
}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}

.app {
  width: 100%;
  height: 100%;
  display: flex;
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;

  .left {
    width: 80px;
    background-color: #fff;
    border-right: 1.5px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .main {
    flex: 1;
    background-color: #fff;
    overflow: auto;
    padding: 10px 40px;


  }
}

</style>

