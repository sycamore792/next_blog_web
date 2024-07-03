<template>
    <div style="align-items: center;display: flex">
        <div class="blogCardLeft">
            <div  class="blogCardHeader">

                <img :src="blogData.authorAvatar" class="authorAvatar"/>

                <div>
                    {{ blogData.author }}
                </div>
                <div>
                    ·
                </div>
                <div>
                    {{ blogData.publishAt }}
                </div>
            </div>

            <div @click="toBlogPage()" class="blogCardMain">
                <div class="blogTitle">
                    {{ blogData.title }}
                </div>
                <div class="blogContentPreview markdown-body" v-html="blogData.contentPreview">
                </div>
            </div>

            <div class="blogCardFooter">
                <div>
                    {{ blogData.readCount }} read
                </div>
            </div>
        </div>
        <div @click="toBlogPage()" class="blogCardRight">
            <img :src="blogData.authorAvatar" class="blogPost"/>
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
    data() {
        return {}
    },
    methods: {
        toBlogPage(){
            this.$router.push('/blogDetail/'+this.blogData.id);
        }
    }

}
</script>

<style scoped lang="less">
.authorAvatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.blogPost {
  width: 150px;
  height: 150px;
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
</style>
