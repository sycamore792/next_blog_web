<template>
    <div class="home-container">
        <div class="grid-layout">
            <div class="profile-card">
                <img src="@/assets/sycamore.png" alt="Profile" class="profile-image"/>
                <h1>Hey! I'm Sycamore.</h1>
                <div class="text-display">
                    <transition-group name="fade" tag="span">
            <span v-for="(char, index) in displayText" :key="index" class="char">
              {{ char }}
            </span>
                    </transition-group>
                </div>
                <div class="social-icons">
                    <a href="https://github.com/sycamore792">
                        <img class="social-icon" src="@/assets/github_icon.png" alt="GitHub"/>
                    </a>
                    <a href="https://v.douyin.com/i67AxXEU/ 0@9.com :7pm">
                        <img class="social-icon" src="@/assets/douyin_icon.png" alt="DouYin"/>
                    </a>
                    <a href="https://twitter.com/sycamore792">
                        <img class="social-icon" src="@/assets/X_icon.png" alt="Twitter"/>
                    </a>
                </div>
            </div>
            <div class="welcome-block">
                <img src="@/assets/waving_hand.gif" style="width: 200px;height: 200px" alt="Waving Hand Emoji" />
                <br>
                <br>
                <div style="display: flex;align-items: center;">
                    <h4>欢迎你！这里是 Next Blog</h4>
                    <img style="height: 45px;width: 45px" src="@/assets/logo.png" alt=""/>
                </div>
                <h6>by sycamore</h6>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const introText = "A software development engineer specializing in large language models (LLMs). I have a beautiful girlfriend and a super cute cat named Xiao Fu. I also have a few close friends who are always up for some epic gaming adventures. Whether we're diving into virtual worlds or exploring new tech, there's never a dull moment!";
const displayText = ref('');
const typewriterSpeed = 10; // milliseconds per character
let typewriterTimer = null;

const typeWriter = () => {
    if (displayText.value.length < introText.length) {
        const nextChar = introText[displayText.value.length];
        displayText.value += nextChar;
        const delay = nextChar === ' ' || displayText.value.length === introText.length
            ? typewriterSpeed * 3
            : typewriterSpeed;
        typewriterTimer = setTimeout(typeWriter, delay);
    }
};

onMounted(() => {
    typeWriter();
});

onBeforeUnmount(() => {
    if (typewriterTimer) {
        clearTimeout(typewriterTimer);
    }
});
</script>

<style scoped lang="less">
.social-icon {
    width: 24px;
    height: 24px;
}

.home-container {
    padding: 20px;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.profile-card, .welcome-block {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-card {
    grid-column: span 2;
}

.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

.social-icons {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

.welcome-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.text-display {
    width: 100%;
    min-height: 100px;
    font-size: 16px;
    line-height: 1.5;
    overflow-y: auto;
    margin-bottom: 20px;
    white-space: pre-wrap;  // 添加这行以保留空格和换行
}

.char {
    display: inline-block;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>

<!--<template>-->
<!--    <div class="home-container">-->
<!--        <div class="grid-layout">-->
<!--            <div class="profile-card">-->
<!--                <img src="@/assets/sycamore.png" alt="Profile" class="profile-image"/>-->
<!--                <h1>Hey! I'm Sycamore.</h1>-->
<!--                <p  ref="introText"></p>-->
<!--                <div class="social-icons">-->
<!--                    <a href="https://github.com/sycamore792">-->
<!--                        <img class="social-icon" src="@/assets/github_icon.png" alt="GitHub"/>-->
<!--                    </a>-->
<!--                    <a href="https://v.douyin.com/i67AxXEU/ 0@9.com :7pm">-->
<!--                        <img class="social-icon" src="@/assets/douyin_icon.png" alt="DouYin"/>-->
<!--                    </a>-->
<!--                    <a href="https://twitter.com/sycamore792">-->
<!--                        <img class="social-icon" src="@/assets/X_icon.png" alt="Twitter"/>-->
<!--                    </a>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="welcome-block">-->
<!--                <img src="@/assets/waving_hand.gif" style="width: 200px;height: 200px" alt="Waving Hand Emoji" />-->
<!--                <br>-->
<!--                <br>-->
<!--                <div style=" display: flex;align-items: center;">-->
<!--                    <h4>欢迎你！这里是 Next Blog</h4><img style="height: 45px;width: 45px" src="@/assets/logo.png" alt=""/>-->
<!--                </div>-->
<!--                <h6>by sycamore</h6>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import BlogItem from '@/components/BlogItem.vue'-->
<!--import PhotoStack from '@/components/PhotoStack.vue'-->
<!--import ReadRankCard from "@/components/ReadRankCard.vue";-->
<!--export default {-->
<!--    name: 'Home',-->
<!--    components: {-->
<!--        PhotoStack,-->
<!--        ReadRankCard,-->
<!--        BlogItem-->
<!--    },-->
<!--    data() {-->
<!--        return {-->
<!--            introText: "A software development engineer specializing in large language models (LLMs). I have a beautiful girlfriend and a super cute cat named Xiao Fu. I also have a few close friends who are always up for some epic gaming adventures. Whether we're diving into virtual worlds or exploring new tech, there's never a dull moment!",-->
<!--            typedText: '',-->
<!--            typewriterSpeed: 5, // milliseconds per character-->
<!--            typewriterTimer: null // 新增: 用于存储定时器ID-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--        typeWriter() {-->
<!--            if (this.typedText.length < this.introText.length) {-->
<!--                this.typedText += this.introText.charAt(this.typedText.length);-->
<!--                if (this.$refs.introText) {-->
<!--                    this.$refs.introText.innerHTML = this.typedText;-->
<!--                }-->
<!--                this.typewriterTimer = setTimeout(this.typeWriter, this.typewriterSpeed);-->
<!--            }-->
<!--        }-->
<!--    },-->
<!--    mounted() {-->
<!--        this.typeWriter();-->
<!--    },-->
<!--    beforeUnmount() {-->
<!--        // 新增: 在组件卸载前清除定时器-->
<!--        if (this.typewriterTimer) {-->
<!--            clearTimeout(this.typewriterTimer);-->
<!--        }-->
<!--    }-->
<!--}-->
<!--//-->
<!--// export default {-->
<!--//     name: 'Home',-->
<!--//     components: {-->
<!--//         PhotoStack,-->
<!--//         ReadRankCard,-->
<!--//         BlogItem-->
<!--//     },-->
<!--//     data() {-->
<!--//         return {-->
<!--//             introText: "A software development engineer specializing in large language models (LLMs). I have a beautiful girlfriend and a super cute cat named Xiao Fu. I also have a few close friends who are always up for some epic gaming adventures. Whether we're diving into virtual worlds or exploring new tech, there's never a dull moment!",-->
<!--//             typedText: '',-->
<!--//             typewriterSpeed: 5 // milliseconds per character-->
<!--//         }-->
<!--//     },-->
<!--//     methods: {-->
<!--//         typeWriter() {-->
<!--//             if (this.typedText.length < this.introText.length) {-->
<!--//                 this.typedText += this.introText.charAt(this.typedText.length);-->
<!--//                 this.$refs.introText.innerHTML = this.typedText;-->
<!--//                 setTimeout(this.typeWriter, this.typewriterSpeed);-->
<!--//             }-->
<!--//         }-->
<!--//     },-->
<!--//     mounted() {-->
<!--//-->
<!--//         this.typeWriter();-->
<!--//     }-->
<!--// }-->
<!--</script>-->

<!--<style scoped lang="less">-->


<!--.social-icon {-->
<!--    width: 24px;-->
<!--    height: 24px;-->
<!--}-->

<!--.home-container {-->
<!--    padding: 20px;-->
<!--}-->

<!--.grid-layout {-->
<!--    display: grid;-->
<!--    grid-template-columns: repeat(3, 1fr);-->
<!--    gap: 20px;-->
<!--}-->

<!--.profile-card, .welcome-block, .photo-preview, .car-image, .theme-toggle, .map-widget {-->
<!--    background-color: white;-->
<!--    border-radius: 10px;-->
<!--    padding: 20px;-->
<!--    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);-->
<!--}-->

<!--.profile-card {-->
<!--    grid-column: span 2;-->
<!--}-->

<!--.profile-image {-->
<!--    width: 150px;-->
<!--    height: 150px;-->
<!--    border-radius: 50%;-->
<!--    object-fit: cover;-->
<!--}-->

<!--.social-icons {-->
<!--    display: flex;-->
<!--    justify-content: space-around;-->
<!--    margin-top: 15px;-->
<!--}-->

<!--.welcome-block, .photo-preview {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    text-align: center;-->
<!--}-->

<!--.car-image img, .photo-preview img {-->
<!--    width: 100%;-->
<!--    height: auto;-->
<!--    object-fit: contain;-->
<!--}-->

<!--// Add more specific styles as needed-->
<!--</style>-->
