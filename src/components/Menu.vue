<template>
    <div class="toggle-btn" @click="toggleMenu">
        <span v-if="isCollapsed">&#9776;</span>
        <span v-else>&times;</span>
    </div>
    <div class="logo">
        <img src="@/assets/logo.png" alt=""/>
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
    <div class="avatar">
        <img src="@/assets/avatar.jpg" alt=""/>
    </div>
    <LoginCard v-if="loginCardVisibleFlag" @close="loginCardVisibleFlag = false"></LoginCard>
</template>

<script>
import home_icon from "@/assets/home_icon.png"
import edit_icon from "@/assets/edit_icon.png"
import message_icon from "@/assets/notification_icon.png"
import mark_icon from "@/assets/mark_icon.png"
import LoginCard from "@/components/LoginCard.vue";

export default {
    name: "Menu",
    components: {
        LoginCard
    },
    data() {
        return {
            isCollapsed: true,
            loginCardVisibleFlag: false,
            menu_item_list: [
                { icon_path: home_icon, page_path: "/home" },
                { icon_path: edit_icon, page_path: "/edit" },
                { icon_path: mark_icon, page_path: "/edit" },
                { icon_path: message_icon, page_path: "/edit" }
            ],
            activeItem: null,
        }
    },
    methods: {
        toggleMenu() {
            this.isCollapsed = !this.isCollapsed;
        },
        getLoginCardMessage(data){
            console.log(data)
        },
        toPage(item) {
            this.activeItem = item;
            if (item.icon_path === edit_icon){
                this.loginCardVisibleFlag = true;
            }else if (item.icon_path === message_icon){
                this.loginCardVisibleFlag = true;
            } else {
                this.$router.push({ path: item.page_path })
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

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
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
        box-shadow: 0 0 5px 2px rgba(0,0,0,0.1);
        transform: scale(1.1);  // 激活状态也保持1.1倍大小
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
