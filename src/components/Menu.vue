<template>
    <div class="logo" @click="logout">
        <img style="width: 40px" src="@/assets/logo.png" alt=""/>
    </div>
    <div class="menu">
        <div
                @click="toPage(item)"
                class="menu_item"
                v-for="item in menu_item_list"
                :class="{ active: activeItem === item }"
        >
            <img :src="item.icon_path" alt=""/>
        </div>
    </div>
    <div class="avatar" >
        <img v-if="userStore.isLoggedIn" class="avatar-img" src="@/assets/avatar.jpg" alt=""/>
        <div v-else class="avatar-img" @click="userStore.showLoginCard" >
            <span style="color: #d5d5d5; font-weight: bold;">登录</span>
        </div>
    </div>
<!--    <LoginCard v-if="loginCardVisibleFlag" @close="loginCardVisibleFlag = false"></LoginCard>-->
</template>

<script>
import home_icon from "@/assets/home_icon.png"
import explore_icon from "@/assets/explore_icon.png"
import edit_icon from "@/assets/edit_icon.png"
import message_icon from "@/assets/notification_icon.png"
import mark_icon from "@/assets/mark_icon.png"
import LoginCard from "@/components/LoginCard.vue";
import {useToastStore} from "@/store/toast";
import {useUserStore} from "@/store/userStore";

export default {
    name: "Menu",
    components: {
        LoginCard
    },setup() {
        const userStore = useUserStore()
        return { userStore }
    },
    data() {
        return {
            isCollapsed: true,
            loginCardVisibleFlag: false,
            menu_item_list: [
                {icon_path: home_icon, page_path: "/home"},
                {icon_path: explore_icon, page_path: "/explore"},
                {icon_path: edit_icon, page_path: "/edit"},
                {icon_path: mark_icon, page_path: "/stream"},
                {icon_path: message_icon, page_path: "/stream"}
            ],
            activeItem: null,
        }
    },
    methods: {
        checkLogin() {
            //查看时候存有token
            if (!localStorage.getItem('token')) {
                this.userStore.showLoginCard()
                return false;
            }
            return true;
        },
        logout() {
            localStorage.removeItem('token');
            useToastStore().showToast({
                message: 'Bye 👋🏼',
                title: '退出登录成功！',
                type: 'success',  // 可以是 'success'、'error' 或 'info'
                duration: 3000
            });
        },
        toPage(item) {
            if (item.icon_path === edit_icon) {
                if (this.checkLogin()) {
                    this.activeItem = item;
                    this.$router.push({path: item.page_path})
                }
            } else if (item.icon_path === message_icon) {
                if (this.checkLogin()) {
                    this.activeItem = item;
                    this.$router.push({path: item.page_path})
                }
            } else {
                this.activeItem = item;
                this.$router.push({path: item.page_path})
            }
        }
    },
    created() {
        this.toPage(this.menu_item_list[0])
    }
}
</script>

<style scoped lang="less">

.logo, .avatar {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  .avatar-img {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #2d2d2d;
  }
}

.menu {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
}

.menu_item {
  aspect-ratio: 1 / 1;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover, &.active {
    background-color: #f0f0f0;
    border-radius: 50%;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.1); // 激活状态也保持1.1倍大小
  }

  img {
    //width: 24px;
    //height: 24px;
    transition: all 0.3s ease;
  }
}

.menu_item.active img {
  filter: brightness(1.2);
}

.avatar {
  height: 120px;
}
</style>
