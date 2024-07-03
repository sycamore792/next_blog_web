<template>
    <div style="justify-content: center;align-items: center; flex-direction: column;">
        <div style="display: flex; justify-content: flex-end;">
            <img @click="goBack" src="@/assets/goback_icon.png"/>
        </div>
        <div class="blogContent">
            <div class="blogContentItem">
                Technology
            </div>
            <div class="blogContentItem">
                {{blogData.title}}
            </div>
            <div class="blogContentItem authorInfo">
                <img  class="authorAvatar" :src="blogData.authorAvatar" alt="">
                <div>{{blogData.authorName}}</div>
                <div>{{blogData.publishAt}}</div>
            </div>
            <div class="blogContentItem">
                {{ blogData.content }}
            </div>
        </div>
    </div>

</template>

<script>
import avatar from "@/assets/avatar.jpg"

export default {
    name: "BlogPage",
    data(){
        return{
            blogData:{
                title:"The lmpact of Technology on the Workplace.How Technology is changing",
                authorAvatar:avatar,
                authorName:"Sycamore",
                publishAt:"August 20,2022",
                content:"夏日的午后，阳光洒落在大地上，仿佛给万物镀上一层金色的光辉。微风轻轻拂过，带来一丝清凉，仿佛大自然的轻声耳语，让人心生宁静。\n" +
                    "\n" +
                    "在这片静谧的田野上，草丛中隐藏着无数的小生命。蝉在树梢上高声吟唱，鸟儿在天空中自由翱翔。远处的湖面波光粼粼，倒映着蓝天白云，仿佛一幅动人的画卷。\n" +
                    "\n" +
                    "我漫步在这片大自然的怀抱中，感受着每一缕微风，每一束阳光。脚下的泥土柔软而温暖，仿佛与大地融为一体。偶尔有几只蜻蜓飞过，轻盈地掠过水面，留下点点涟漪。\n" +
                    "\n" +
                    "夏日的静谧，不仅在于外界的宁静，更在于内心的安宁。在这片大自然的怀抱中，仿佛一切喧嚣都已远去，只剩下心灵的纯净与平和。无论是高大的树木，还是细小的野花，都在这片天地中找到了属于自己的位置，静静地生长，默默地绽放。\n" +
                    "\n" +
                    "夕阳西下，天空渐渐染上了绯红。夜幕降临时，星星一颗颗点亮，仿佛在黑夜中编织出一张璀璨的星网。蛙鸣此起彼伏，夜风轻柔地拂过脸庞，带来一丝凉意。\n" +
                    "\n" +
                    "在这片夏日的静谧中，我感受到了一种从未有过的宁静与满足。这是大自然给予我们的礼物，让我们在繁忙的生活中，找到片刻的安宁与平和。无论前方的路多么曲折，只要心中有这一份静谧，便能勇敢前行。\n" +
                    "\n" +
                    "夏日的静谧，是大自然的温柔，是心灵的港湾。愿我们每个人都能在这片静谧中，找到内心的平和与安宁。"
            }
        }
    },
    created() {
        let id = this.$route.params.id
        console.log(id)
    },
    methods: {
        goBack() {
            this.$router.push("/home");
        }
    }

}
</script>

<style scoped>
.authorInfo{
    display: flex;
    align-items: center;
    gap: 15px;
}
.authorAvatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.blogContent{
    width: 70%;
    margin: auto;
    word-break: break-word;
    .blogContentItem{
        margin: 20px;
    }
}
</style>
