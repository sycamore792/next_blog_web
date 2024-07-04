<template>
    <div class="logo">
        <img src="@/assets/logo.webp" alt=""/>
    </div>
    <div class="menu">
        <div @click="toPage(item)" class="menu_item" v-for="item in menu_item_list">
            <img :src="item.icon_path" alt=""/>
        </div>

    </div>

    <div class="avatar">
        <img src="@/assets/avatar.jpg" alt=""/>
    </div>
    <LoginCard  v-if="loginCardVisibleFlag"  @close="loginCardVisibleFlag = false"></LoginCard>
</template>

<script>
import home_icon from "@/assets/home_icon.png"
import edit_icon from "@/assets/edit_icon.png"
import message_icon from "@/assets/message_icon.png"
import mark_icon from "@/assets/mark_icon.png"
import LoginCard from "@/components/LoginCard.vue";

export default {
    name: "Menu",
    components: {
        LoginCard
    },
    data() {
        return {
            loginCardVisibleFlag: false,
            menu_item_list: [
                {
                    icon_path: home_icon,
                    page_path: "/home"
                }, {
                    icon_path: edit_icon,
                    page_path: "/edit"

                }, {
                    icon_path: mark_icon,
                    page_path: "/edit"
                }, {
                    icon_path: message_icon,
                    page_path: "/edit"
                }
            ]
        }
    },
    methods: {
        getLoginCardMessage(data){
            console.log(data)
        },
        // closeModal(event) {
        //     // 如果点击的是模态框本身（而不是其内容），则关闭模态框
        //     if (event.target === event.currentTarget) {
        //         this.$emit('close')
        //     }
        // },
        toPage(item) {
            if (item.icon_path === edit_icon){
                this.loginCardVisibleFlag = true;
            }else if (item.icon_path === message_icon){
                this.loginCardVisibleFlag = true;
            }
            else {
                this.$router.push({
                    path: item.page_path
                })
            }

        }
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
  margin: 20px;
  cursor: pointer;
}

.avatar {
  height: 120px;

}
</style>
