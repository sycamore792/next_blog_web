<template>
    <div class="modal " @click="closeModal">
        <div class="modal-content">
            <h2>登录查看更多</h2>
            <p>Choose one of the option to go</p>
            <form @submit.prevent="login">
                <div v-if="isSmsLogin" class="sms-login">
                    <input type="tel" v-model="phone" placeholder="手机号" required>
                    <div class="verification-code">
                        <input type="text" v-model="verificationCode" placeholder="验证码" required>
                        <button type="button" @click="sendVerificationCode" :disabled="coolDown > 0">
                            {{ coolDown > 0 ? `${coolDown}s` : '发送验证码' }}
                        </button>
                    </div>
                </div>
                <div v-else >
                    <input type="email" v-model="email" placeholder="邮箱或者手机号" required>
                    <input type="password" v-model="password" placeholder="密码" required>
                    <p class="or-continue">Or continue with</p>
                    <div class="social-login">
                        <button type="button" class="social-btn google"><img src="@/assets/Google.png" alt="Google">
                        </button>
                        <button type="button" class="social-btn facebook"><img src="@/assets/Facebook.png" alt="Meta">
                        </button>
                        <button type="button" class="social-btn apple"><img src="@/assets/Apple.png" alt="Apple">
                        </button>
                    </div>

                </div>
                <button type="button" @click="()=>{this.isSmsLogin = !this.isSmsLogin}" class="toggle-btn">
                    切换到{{ isSmsLogin? '账号' : '手机号' }}登录
                </button>
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name: "LoginCard",

    data() {
        return {
            coolDown: 0,
            isSmsLogin: false,
            email: '',
            password: '',
            phone: '',
            verificationCode: ''
        }
    },
    methods: {
        sendVerificationCode() {
            // 在这里添加发送验证码的逻辑
            console.log('Sending verification code to:', this.phone)
            this.coolDown = 60
            const timer = setInterval(() => {
                this.coolDown--
                if (this.coolDown <= 0) {
                    clearInterval(timer)
                }
            }, 1000)
        },
        closeModal(event) {
            // 如果点击的是模态框本身（而不是其内容），则关闭模态框
            if (event.target === event.currentTarget) {
                this.$emit('close')
            }
        },
        login() {
            // 处理登录逻辑
            console.log('Login attempt:', this.email, this.password)
            // 登录成功后关闭弹窗
            this.showModal = false
        }
    }
}
</script>

<style scoped lang="less">

.verification-code {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    input {
        flex-grow: 1;
        height: 40px; // 设置固定高度
        padding: 0 10px; // 调整内边距
        font-size: 14px; // 设置字体大小
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box; // 确保padding不会增加总高度
    }

    button {
        height: 40px; // 与输入框相同的高度
        padding: 0 15px; // 调整水平内边距
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px; // 设置字体大小
        white-space: nowrap; // 防止文本换行

        &:disabled {
            background-color: #cccccc;
        }
    }
}
.toggle-btn {
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: underline;
}
.modal {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
}

h2 {
  margin-bottom: 5px;
}

p {
  color: #666;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.or-continue {
  margin: 15px 0;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.social-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.social-btn img {
  width: 24px;
  height: 24px;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
