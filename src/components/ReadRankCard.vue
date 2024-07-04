<template>
    <div style="align-items: center;display: flex">
        <div class="cardLeft">
            <div class="cardHeader ">
                <img :src="readRankingData.authorAvatar" class="authorAvatar"/>
                <div>
                    {{ readRankingData.author }}
                </div>
            </div>

            <div @click="toBlogPage()" class="cardMain pointer">
                <div class="blogTitle">
                    {{ readRankingData.title }}
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: "ReadRankCard",
    props: {
        readRankingData: {
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
        toBlogPage() {
            this.$router.push('/blogDetail/' + this.readRankingData.id);
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

.cardMain {
  align-items: center;
  padding-top: 10px;
  gap: 15px;
}

.cardHeader {
  display: flex;
  align-items: center;
  //margin: 10px;

  padding-top: 20px;
  gap: 15px;
}

</style>
