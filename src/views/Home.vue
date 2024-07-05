<template>
    <div style="display: flex;overflow: auto;width: 100%;height: 100%">
        <div style="flex: 1;overflow: auto ;padding-right: 30px">
            <div class="tap_bar">
                <div class="tab_item" :class="{'active': currentTab === 0}" @click="getBlogList(0)">
                    正在关注
                </div>
                <div class="tab_item" :class="{'active': currentTab === 1}" @click="getBlogList(1)">
                    推荐阅读
                </div>
                <div class="search-box">
                    <input :class="{ expanded:  searchBarIsExpanded }" class="search-input"
                           type="text" placeholder="搜索" v-model="searchQuery" @focus="searchBarIsExpanded = true"
                           @blur="searchBarIsExpanded = false"/>
                </div>
            </div>
            <div style="padding-top: 30px">
                <template v-for="item in blogList " :key="item.id">
                    <BlogItem :blogData="item"></BlogItem>
                </template>
            </div>
        </div>
        <div style="width: 40%;overflow: auto; padding: 40px;  border-left: 1px solid #e5e5e5;">
            <div class="ranking_list">
                <div style="font-weight: bolder ">
                    <div class="colored-dot"></div>
                    大家都在看？
                </div>
                <div>
                    <template v-for="item in readRankingData " :key="item.id">
                        <ReadRankCard :readRankingData="item"></ReadRankCard>
                    </template>
                </div>
                <div style="padding-top: 20px"><i class="pointer">查看全部</i></div>
            </div>

        </div>
    </div>
</template>

<script>
import BlogItem from '@/components/BlogItem.vue'
import avatar from "@/assets/avatar.jpg"
import mdi from "@/utils/mdi.js";
import ReadRankCard from "@/components/ReadRankCard.vue";

export default {
    name: 'Home',
    components: {ReadRankCard, BlogItem},
    created() {
        this.getBlogList(1)
    },
    methods: {
        getBlogList(type) {

            if (type !== this.currentTab) {
                console.log(type)
                if (type === 1) {
                    //推荐阅读
                    this.blogList = [
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
                        }, {
                            id: "2",
                            title: "Melody mobile app: a Ul UX case study",
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
                        }, {
                            id: "2",
                            title: "Melody mobile app: a Ul UX case study",
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
                    ];
                    this.currentTab = type
                } else {
                    //正在关注
                    this.blogList = [
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
                    ];
                    this.currentTab = 0
                }
            }

        }
    },
    data() {
        return {
            searchBarIsExpanded: false,
            searchQuery: '',
            currentTab: null,
            blogList: [],
            readRankingData: [
                {
                    id: "1",
                    title: "Your portfolio is stopping you from geting that job",
                    author: "Sycamore",
                    authorAvatar: avatar,
                }, {
                    id: "2",
                    title: "Melody mobile app: a Ul UX case study",
                    author: "Sycamore",
                    authorAvatar: avatar,
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.search-input {
  width: 200px; /* 初始宽度 */
  transition: width 0.3s ease; /* 添加过渡效果 */
    &:hover{
        width: 400px; /* 伸长后的宽度 */
    }
}

.search-input.expanded {
  width: 400px; /* 伸长后的宽度 */
}

.search-box {
  margin-left: auto;
}

.search-box input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.ranking_list {
}

.colored-dot {
  width: 10px;
  height: 10px;
  background-color: #388647;
  border-radius: 50%;
  display: inline-block;
}


.tap_bar {
  display: flex;
  padding: 25px 10px;
  border-bottom: 1px solid #eaeaea;

  .tab_item {
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
  }

  .tab_item.active {
    color: #388647;
    border-bottom: 2px solid #388647;
  }

}
</style>
