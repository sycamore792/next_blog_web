<template>
    <div style="justify-content: center;align-items: center; flex-direction: column;">
        <div style="display: flex; justify-content: flex-end; padding-right: 200px;padding-top: 20px;padding-bottom: 0 ">
            <img @click="goBack" src="@/assets/goback_icon.png"/>
        </div>
        <div class="blogContent">
            <div class="blogContentItem">
                <div class="blogLabelButton" style=" background-color: #4B6BFB;color: white">
                    Technology
                </div>
                <div class="blogLabelButton" style="background-color: #ab7f4c;color: white">
                    Food
                </div>

            </div>
            <div class="blogContentItem" style="font-weight: bolder;font-size: xx-large">
                {{ blogData.title }}
            </div>
            <div class="blogContentItem authorInfo">
                <img class="authorAvatar" :src="blogData.authorAvatar" alt="">
                <div style="color: #828688">{{ blogData.authorName }}</div>
                <div style="color: #828688">{{ blogData.publishAt }}</div>
            </div>
            <div v-html="blogData.content" class="blogContentItem blogContentText" style="padding-bottom: 40px">
            </div>
        </div>
    </div>

</template>

<script>
import avatar from "@/assets/avatar.jpg"
import mdi from "@/utils/mdi";

export default {
    name: "BlogPage",
    data() {
        let i = "## 成功秘诀：保持持续学习的心态\n" +
            "### 引言\n" +
            "\n" +
            "在快速变化的世界中，成功的秘诀之一是保持持续学习的心态。无论是在职业发展还是个人成长方面，持续学习都能帮助我们保持竞争力和适应能力。本文将探讨持续学习的重要性以及如何在日常生活中实践这一理念。\n" +
            "\n" +
            "### 为什么持续学习如此重要？\n" +
            "\n" +
            "#### 1. 适应快速变化的世界\n" +
            "\n" +
            "当今社会，科技进步日新月异，行业发展迅速。如果我们停滞不前，很容易被淘汰。持续学习可以帮助我们跟上时代的步伐，掌握最新的知识和技能，从而在竞争中脱颖而出。\n" +
            "\n" +
            "#### 2. 提高职业竞争力\n" +
            "\n" +
            "无论是初入职场的新手，还是经验丰富的专业人士，持续学习都能提高我们的职业竞争力。通过学习新的技能和知识，我们可以提升工作效率，增加升职加薪的机会。\n" +
            "\n" +
            "#### 3. 增强个人成长\n" +
            "\n" +
            "持续学习不仅对职业发展有益，对个人成长也同样重要。它能拓宽我们的视野，丰富我们的知识体系，帮助我们更好地理解世界，提升自信心和解决问题的能力。\n" +
            "\n" +
            "### 如何实践持续学习？\n" +
            "\n" +
            "#### 1. 设定学习目标\n" +
            "\n" +
            "明确的学习目标可以帮助我们集中注意力，提高学习效率。无论是学习一门新语言，掌握一项新技能，还是深入了解某个领域，都可以通过设定具体的目标来实现。\n" +
            "\n" +
            "#### 2. 制定学习计划\n" +
            "\n" +
            "有了目标后，我们需要制定详细的学习计划。可以每天、每周或每月安排一定的时间进行学习，确保学习的持续性和系统性。\n" +
            "\n" +
            "#### 3. 利用多种学习资源\n" +
            "\n" +
            "现代社会，学习资源丰富多样。我们可以通过书籍、在线课程、视频教程、研讨会等多种方式进行学习。选择适合自己的学习方式和资源，可以事半功倍。\n" +
            "\n" +
            "#### 4. 实践与应用\n" +
            "\n" +
            "学习的最终目的是应用到实际中。我们可以通过实践和项目来巩固所学知识，将理论转化为实践，提高实际操作能力。\n" +
            "\n" +
            "### 结论\n" +
            "\n" +
            "持续学习是成功的关键。通过保持开放的心态，设定明确的目标，制定合理的计划，并不断实践与应用，我们可以在快速变化的世界中保持竞争力，实现职业和个人的持续发展。\n"
        ;

        return {
            blogData: {
                title: "The lmpact of Technology on the Workplace.How Technology is changing",
                authorAvatar: avatar,
                authorName: "Sycamore",
                publishAt: "August 20,2022",
                content: mdi.render(i)

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
.blogContentText {
    font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: large;

}

.blogLabelButton {
    display: inline-block;
    border-radius: 15px;
    padding: 10px;
    margin: 5px
}

.authorInfo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.authorAvatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.blogContent {
    width: 55%;
    margin: auto;
    word-break: break-word;

    .blogContentItem {
        margin: 20px;
    }
}
</style>
