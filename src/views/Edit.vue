<template>
    <div class="container">
        <div>流式测试</div>
        <div class="text-display">
            <transition-group name="fade" tag="span">
        <span v-for="(char, index) in displayText" :key="index" class="char">
          {{ char }}
        </span>
            </transition-group>
        </div>
        <input
                v-model="inputText"
                @input="handleInput"
                class="text-input"
                type="text"
                placeholder="请输入文字..."
        >
    </div>
</template>
<script setup>
import {ref} from 'vue';

const inputText = ref('');
const displayText = ref('');

const handleInput = () => {
    // 截取新输入的字符
    const newChar = inputText.value.slice(displayText.value.length);
    if (newChar) {
        // 延迟显示新字符
        displayText.value += newChar;
    } else {
        // 处理删除操作
        displayText.value = inputText.value;
    }
};

// 监听输入文本的变化，处理文本减少的情况
// watch(inputText, (newValue) => {
//     if (newValue.length < displayText.value.length) {
//         displayText.value = newValue;
//     }
// });
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.text-display {
    width: 300px;
    height: 150px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.5;
    overflow-y: auto;
}

.text-input {
    width: 300px;
    padding: 10px;
    font-size: 16px;
}

.char {
    display: inline-block;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
