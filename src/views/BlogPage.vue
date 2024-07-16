<template>
    <div style="justify-content: center;align-items: center; flex-direction: column;">
        <div style="display: flex; justify-content: flex-end; padding-right: 200px;padding-top: 20px;padding-bottom: 0 ">
            <img @click="goBack" src="@/assets/goback_icon.png"/>
        </div>
        <div class="blogContent">
            <div class="blogContentItem" style="  margin-top: 10px;margin-bottom: 10px;">
                <div class="blogLabelButton" style=" background-color: #4B6BFB;color: white">
                    Technology
                </div>
                <div class="blogLabelButton" style="background-color: #ab7f4c;color: white">
                    Food
                </div>
            </div>
            <div class="blogContentItem"
                 style="  margin-top: 10px;margin-bottom: 10px; font-weight: bolder;font-size: xx-large">
                {{ blogData.title }}
            </div>
            <div class="blogContentItem authorInfo">
                <img class="authorAvatar" :src="blogData.authorAvatar" alt="">
                <div style="color: #000000">{{ blogData.authorName }}</div>
                <div style="color: #828688">{{ blogData.publishAt }}</div>
            </div>
            <div id="blogMarkdown" v-html="blogData.content" class="blogContentItem blogContentText">
            </div>
        </div>
    </div>

</template>

<script>
import avatar from "@/assets/avatar.jpg"
import mdi from "@/utils/mdi";
import {marked} from "marked";
import blogApi from '@/api/BlogApi';
import {useToastStore} from "@/store/toast";
import VditorPreview from 'vditor/dist/method.min'

export default {
    name: "BlogPage",
    data() {
        return {
            markdownOptions: {
                gfm: true,
                breaks: true,
                smartLists: true,
                highlight: function (code) {
                    return require('highlight.js').highlightAuto(code).value;
                }
            },
            blogData: {
                // title: "The lmpact of Technology on the Workplace.How Technology is changing",
                // authorAvatar: avatar,
                // authorName: "Sycamore",
                // publishAt: "August 20,2022",
                // content: marked(i, markdownOptions),
                // id: ""
            }
        }
    },
    created() {
        let id = this.$route.params.id
        console.log(id)
        blogApi.getBlogDetail(id).then(res => {
            if (!res.data.success) {
                console.log(res.data.errMessage)
                useToastStore().showToast({
                    message: res.data.errMessage,
                    title: '😨出错了，赶快叫sycamore来！',
                    type: 'error',  // 可以是 'success'、'error' 或 'info'
                    duration: 1000
                });
            } else {
                const data = res.data.data;
                if (data.content != null && data.content.length > 0) {


                    data.content = marked(data.content, this.markdownOptions);
                    // data.content = VditorPreview.md2html(data.content);
                }
                console.log(data)
                this.blogData = data;
            }
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        goBack() {
            this.$router.push('/explore');
            // this.$router.back();
        }
    }

}
</script>

<style scoped>
.blogContentText {
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: large;
    line-height: 2.3;
    padding-bottom: 40px;
}

.blogLabelButton {
    display: inline-block;
    border-radius: 15px;
    padding: 10px;
    margin-right: 10px;
}

.authorInfo {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.authorAvatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.blogContent {
    width: 45%;
    margin: auto;
    word-break: break-word;

    .blogContentItem {
        /*margin: 20px;*/
    }
}
</style>
