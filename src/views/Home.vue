<template>
    <div style="display: flex;overflow: auto;width: 100%;height: 100%">
        <div style="flex: 1;overflow: auto ;padding-right: 30px">
            <div class="tap_bar">
                <div class="tab_item" @click="getBlogList(0)">
                    正在关注
                </div>
                <div class="tab_item" @click="getBlogList(1)">
                    推荐阅读
                </div>
            </div>
            <div>
                <template v-for="item in blogList " :key="item.id">
                    <BlogItem :blogData="item"></BlogItem>
                </template>
            </div>
        </div>
        <div style="width: 450px;overflow: auto; padding: 20px;  border-left: 1px solid #e5e5e5;">
<!--            <div class="search_bar" style="padding: 30px 0;">-->
<!--                <form>-->
<!--                    <input type="text" placeholder="请输入您要搜索的内容...">-->
<!--                    <button type="submit"></button>-->
<!--                </form>-->
<!--            </div>-->
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
            }
        }
    },
    data() {
        return {
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
.ranking_list {
}

.colored-dot {
  width: 10px;
  height: 10px;
  background-color: #388647;
  border-radius: 50%;
  display: inline-block;
}

.search_bar {

  form {
    position: relative;
    width: 300px;
    margin: 0 auto;
  }

  input, button {
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    height: 42px;
    padding-left: 13px;
  }

  button {
    height: 42px;
    width: 42px;
    cursor: pointer;
    position: absolute;
  }
}

.search_bar form {
  height: 42px;
}

.search_bar input {
  width: 250px;
  border-radius: 42px;
  border: 2px solid #324B4E;
  background: #ffffff;
  transition: .3s linear;
  float: right;
}

.search_bar input:focus {
  width: 300px;
}

.search_bar button {
  background: none;
  top: -2px;
  right: 0;
}

.search_bar button:before {
  content: "\f002";
  font-family: FontAwesome;
  color: #324b4e;
}


.tap_bar {
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid #e5e5e5;

  .tab_item {
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
