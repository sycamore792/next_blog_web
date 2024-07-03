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

</template>

<script>
import home_icon from "@/assets/home_icon.png"
import edit_icon from "@/assets/edit_icon.png"

export default {
    name: "Menu",
    data() {
        return {
            menu_item_list: [
                {
                    icon_path: home_icon,
                    page_path: "/home"
                }, {
                    icon_path: edit_icon,
                    page_path: "/edit"

                }
            ]
        }
    },
    methods: {
        toPage(item) {
            this.$router.push({
                path: item.page_path
            })
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
