
<template>
    <div class="blog-card-wrapper">
        <div class="blog-card" style="align-items: center; display: flex">
            <div class="blogCardLeft">
                <div class="blogCardHeader">
                    <img :src="blogData.authorAvatar" class="authorAvatar"/>
                    <div> {{ blogData.author }} </div>
                    <div> {{ blogData.publishAt }} </div>
                </div>
                <div @click="toBlogPage()" class="pointer blogCardMain">
                    <div class="blogTitle" style="font-weight: bolder"> {{ blogData.title }} </div>
                    <div style="padding-top: 10px" class="blogContentPreview markdown-body" v-html="blogData.contentPreview">
                    </div>
                </div>
                <div class="blogCardFooter">
                    <div class="pointer"> {{ blogData.readCount }} read </div>
                    <img class="pointer" src="@/assets/bookmark_icon.png" alt="" />
                </div>
            </div>
            <div @click="toBlogPage()" class="blogCardRight">
                <img :src="blogData.authorAvatar" class="blogPost"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BlogItem",
    props: {
        blogData: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        toBlogPage(){
            this.$router.push('/blogDetail/'+this.blogData.id);
        }
    }
}
</script>

<style scoped lang="less">
.blogCardRight{
    padding-right: 20px;
}
.blog-card-wrapper {
    padding: 5px;
    margin-bottom: 5px; // 增加卡片之间的间距
}

.blog-card {
    background-color: #ffffff;
    transition: all 0.4s ease;
    border-radius: 20px;
    //box-shadow:0 2px 2px rgba(0,0,0,0.1);
    box-shadow: 2px 2px 13px -3px rgba(0, 0, 0, 0.1);
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    }
}

.authorAvatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.blogPost {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.05);
    }
}

.blogCardMain {
    align-items: center;
    margin: 10px;
    padding: 10px;
    gap: 15px;
}

.blogCardHeader {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    gap: 15px;
}

.blogCardFooter {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    gap: 15px;
}

.pointer {
    cursor: pointer;
}

.blogTitle {
    transition: color 0.3s ease;

    &:hover {
        color: #6c6c6e;
    }
}
</style>
