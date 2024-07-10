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

<!--<template>
    <div class="app">
        <div class="left" :class="{ 'mobile-menu': isMobile }">
            <Menu @toggleMenu="toggleMenu" :isMobile="isMobile"></Menu>
        </div>

        <div class="main">
            <router-view v-slot="{ Component }">
                <transition name="fade-slide">
                    <component :is="Component"/>
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
    },
    data() {
        return {
            isMobile: false,
            isMenuOpen: false
        }
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
            this.isMobile = window.innerWidth <= 768;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
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
    transition: all 0.3s ease;
  }
    .mobile-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 1000;
        transform: translateX(-100%);

        &.open {
            transform: translateX(0);
        }
    }
  .main {
    flex: 1;
    background-color: #fff;
    overflow: auto;
    padding: 10px 40px;


  }
}
@media (max-width: 768px) {
    .app {
        flex-direction: column;

        .left {
            width: 100%;
            height: auto;
            border-right: none;
            border-bottom: 1.5px solid #e5e5e5;
        }

        .main {
            padding: 10px 20px;
        }
    }
}
</style>

-->
