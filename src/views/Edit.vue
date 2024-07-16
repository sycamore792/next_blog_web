<template>
    <div class="container">
        <div id="vditor"></div>
    </div>


</template>

<script>

// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';
import vditor from "vditor";

export default {
    data() {
        return {
            inputText: '',
            displayText: '',
            markdownContent: "",
            vditorInstance :null
        }
    },
    mounted() {
        this.vditorInstance = new Vditor('vditor', {
            preview: {
                delay: 100,
                hljs: {
                    enable: true,
                    lineNum: true,
                    theme: 'github-light',
                },
                actions: ["desktop", "mobile"],
                // actions: ["desktop", "mobile", "mp-wechat", "zhihu"],
            },
            counter: {
                enable: true,
            },
            hint: {
                emoji: {
                    "笑脸": "😀",
                    "大笑": "😃",
                    "微笑": "😄",
                    "露齿笑": "😁",
                    "笑哭": "😆",
                    "汗笑": "😅",
                    "喜极而泣": "😂",
                    "捧腹大笑": "🤣",
                    "放松": "😌",
                    "害羞": "😊",
                    "天真": "😇",
                    "眨眼": "😉",
                    "淘气": "😜",
                    "吐舌": "😝",
                    "耍酷": "😎",
                    "思考": "🤔",
                    "惊讶": "😲",
                    "脸红": "😳",
                    "无语": "😶",
                    "闭嘴": "🤐",
                    "困惑": "😕",
                    "担心": "😟",
                    "悲伤": "😢",
                    "痛苦": "😖",
                    "生气": "😠",
                    "发怒": "😡",
                    "失望": "😞",
                    "绝望": "😣",
                    "恐惧": "😨",
                    "尖叫": "😱",
                    "恶心": "🤢",
                    "呕吐": "🤮",
                    "晕": "😵",
                    "心跳": "❤️",
                    "黄心": "💛",
                    "绿心": "💚",
                    "蓝心": "💙",
                    "紫心": "💜",
                    "心碎": "💔",
                    "火": "🔥",
                    "星星": "⭐",
                    "闪电": "⚡",
                    "拳头": "👊",
                    "鼓掌": "👏",
                    "胜利": "✌️",
                    "比心": "💖",
                    "喜欢": "👍",
                    "不喜欢": "👎",
                    "握手": "🤝",
                    "祈祷": "🙏",
                    "拍手": "👏",
                    "强": "💪",
                    "好": "👌",
                    "竖大拇指": "👍",
                    "嘘": "🤫",
                    "吻": "😘",
                    "飞吻": "💋",
                    "玫瑰": "🌹",
                    "花": "🌸",
                    "太阳": "☀️",
                    "月亮": "🌙",
                    "星星": "⭐",
                    "雪花": "❄️",
                    "云": "☁️",
                    "雨": "🌧️",
                    "雷": "🌩️",
                    "风": "🌬️",
                    "伞": "☂️",
                    "雪人": "⛄",
                    "火山": "🌋",
                    "山": "⛰️",
                    "树": "🌳",
                    "花": "🌼",
                    "草": "🌿",
                    "蛋糕": "🍰",
                    "冰淇淋": "🍦",
                    "糖果": "🍬",
                    "水果": "🍉",
                    "蔬菜": "🥦",
                    "面包": "🍞",
                    "披萨": "🍕",
                    "汉堡": "🍔",
                    "薯条": "🍟",
                    "热狗": "🌭",
                    "寿司": "🍣",
                    "饭": "🍚",
                    "面条": "🍜",
                    "汤": "🍲",
                    "咖啡": "☕",
                    "茶": "🍵",
                    "啤酒": "🍺",
                    "鸡尾酒": "🍸",
                    "牛奶": "🥛",
                    "果汁": "🍹"
                }


            },
            outline: {
                enable: true,
                // position:'top'
            },
            // height: '70vh',
            mode: "sv",
            width: '70vw',
            blur(value) {
                // 保存文档....
                console.log('保存成功')
                console.log(value)
            },
            toolbar: [
                "emoji",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                "upload",
                "record",
                "table",
                "|",
                "undo",
                "redo",
                "|",
                "fullscreen",
                "edit-mode",
                {
                    name: "more",
                    toolbar: [
                        "both",
                        "code-theme",
                        "content-theme",
                        "export",
                        "outline",
                        "preview",
                        "devtools",
                    ],
                },
            ],
            toolbarConfig: {
                hide: false,
                pin: false,
            }

            ,

        });
        vditor.value = this.vditorInstance

    },
    methods: {
        handleInput() {
            // 截取新输入的字符
            const newChar = this.inputText.slice(this.displayText.length);
            if (newChar) {
                // 延迟显示新字符
                this.displayText += newChar;
            } else {
                // 处理删除操作
                this.displayText = this.inputText;
            }
        },
        publishContent() {
            const content = this.vditorInstance.getValue()
            // 这里您可以添加实际的发布逻辑，比如发送到服务器
            console.log('准备发布的内容:', content)
            // 模拟发布过程
            setTimeout(() => {
                alert('内容已成功发布！')
                // 这里可以添加发布后的其他操作，比如清空编辑器或跳转到其他页面
            }, 1000)
        },
        scrollToTop() {
            if (this.editorElement) {
                this.editorElement.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            }
        },
        scrollToBottom() {
            if (this.editorElement) {
                this.editorElement.scrollTo({
                    top: this.editorElement.scrollHeight,
                    behavior: 'smooth'
                })
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
</style>
