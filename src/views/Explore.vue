<template>
    <div style="display: flex;overflow: auto;width: 100%;height: 100%">
        <div style="flex: 1;overflow: auto ;padding-right: 30px">
            <div class="tap_bar">
                <div  class="tab_item" :class="{'active': currentTab === 0}" @click="getBlogList(0)">
                    正在关注
                </div>
                <div class="tab_item" :class="{'active': currentTab === 1}" @click="getBlogList(1)">
                    推荐阅读
                </div>
                <div class="search-box">
                    <input :class="{ expanded:  searchBarIsExpanded }" class="search-input"
                           type="text" placeholder="搜索" v-model="searchQuery" @focus="searchBarIsExpanded = true"
                           @blur="searchBarIsExpanded = false"/>

                    <!--                    <img class="search-icon" src="@/assets/search_icon.png" alt="搜索图标"/>-->

                </div>
            </div>
            <div style="padding-top: 30px;width: 80%" >
                <template v-for="item in blogList " :key="item.id">
                    <div >
                        <BlogItem :blogData="item"></BlogItem>
                    </div>

                </template>
            </div>
        </div>
        <div style="overflow: auto; padding: 40px;  border-left: 1px solid #e5e5e5;">
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
import blogApi from '@/api/BlogApi';
import {useToastStore} from "@/store/toast";

export default {
    name: 'Explore',
    components: {ReadRankCard, BlogItem},
    created() {
        this.getBlogList(1);
    },
    methods: {
        getBlogList(type) {

            if (type !== this.currentTab) {
                if (type === 1) {
                    blogApi.getBlogList(1, 10).then(res => {
                        // this.blogList = res.data.data
                        if (!res.data.success) {
                            console.log(res.data.errMessage)
                        } else {
                            let data = res.data.data;
                            for (let i = 0; i < data.length; i++) {
                                data[i] = {
                                    id: data[i].id,
                                    title: data[i].title,
                                    author: "Sycamore",
                                    authorAvatar: avatar,
                                    publishAt: "4 days ago",
                                    contentPreview: mdi.render("An intense way to learn about the process and practice your designs skills -\nMy 1st hackathon Hackathons have been on my mind since l heard it was agood way to gain experience as a junior UX designer. As my portfolio..."),
                                    readCount: 3000
                                }
                            }
                            this.blogList = data;
                        }
                    }).catch(err => {
                        console.log(err)
                        useToastStore().showToast({
                            message: 'find sycamore and call 911！！',
                            title: '😱网络连接异常！',
                            type: 'error',  // 可以是 'success'、'error' 或 'info'
                            duration: 3000
                        });
                    })
                    this.currentTab = type
                }
                else {
                    //查看是否是登录状态
                    if (!localStorage.getItem('token')){
                        useToastStore().showToast({
                            message: '😀',
                            title: '请登录后查看',
                            type: 'info',  // 可以是 'success'、'error' 或 'info'
                            duration: 1500
                        });
                        return
                    }
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
  height: 35px;
  font-size: 16px;

  &:hover {
    width: 300px; /* 伸长后的宽度 */
    //height: 40px;
  }
}

.search-input.expanded {
  width: 300px; /* 伸长后的宽度 */
  //height: 40px;
}

.search-box {
  margin-left: auto;
  align-items: center;
  position: relative;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.search-box input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
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

  //.tab_item {
  //  font-weight: bold;
  //  margin-right: 10px;
  //  cursor: pointer;
  //}
  .tab_item {
    font-weight: bold;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.3s ease; // 添加过渡效果
  }

  .tab_item.active {
    color: #323234;
    //font-size: 18px;
    border-bottom: 2px solid;
    transform: scale(1.2); // 添加放大效果
  }

  //.tab_item.active {
  //  color: #388647;
  //  font-size: 18px;
  //  border-bottom: 2px solid;
  //}

}
</style>
