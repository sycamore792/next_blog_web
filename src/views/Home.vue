<template>
    <div class="tap_bar">
        <div class="tab_item">
            正在关注
        </div>
        <div class="tab_item">
            推荐阅读
        </div>
    </div>
    <div>
        <template v-for="item in blogList " :key="item.id">
            <BlogItem :blogData="item"></BlogItem>
            <hr style="border: none;height: 1px; background-color: #e5e5e5">
        </template>
    </div>

</template>

<script>
import BlogItem from '@/components/BlogItem.vue'
import avatar from "@/assets/avatar.jpg"
import mdi from "@/utils/mdi.js";

export default {
    name: 'Home',
    components: {BlogItem},
    data() {
        return {
            blogList: [
                {
                    id: "1",
                    title: "Your portfolio is stopping you from geting that job",
                    author: "Sycamore",
                    authorAvatar: avatar,
                    publishAt: "4 days ago",
                    contentPreview: mdi.render("An intense way to learn about the process and practice your designs skills -\nMy 1st hackathon Hackathons have been on my mind since l heard it was agood way to gain experience as a junior UX designer. As my portfolio..."),
                    readCount: 3000
                }, {
                    id: "2",
                    title: "Melody mobile app: a Ul UX case study",
                    author: "Sycamore",
                    authorAvatar: avatar,
                    publishAt: "4 days ago",
                    contentPreview: mdi.render("An intense way to learn about the process and practice your designs skills -\nMy 1st hackathon Hackathons have been on my mind since l heard it was agood way to gain experience as a junior UX designer. As my portfolio..."),
                    readCount: 3000
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.tap_bar {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;

  .tab_item {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
