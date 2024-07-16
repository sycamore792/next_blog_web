<template>
    <div class="modal " @click="closeModal" v-if="userStore.loginCardVisible">
        <div class="modal-content shake-animation">
            <button class="close-btn" @click="closeAndClear">&times;</button>
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
                <div v-else>
                    <input type="text" v-model="username" placeholder="邮箱或者手机号" required>
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
                    切换到{{ isSmsLogin ? '账号' : '手机号' }}登录
                </button>
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
    </div>

</template>

<script>
import UserApi from "@/api/UserApi";
import {useToastStore} from "@/store/toast";
import {useUserStore} from "@/store/userStore";

export default {
    name: "LoginCard",
    setup() {
        const userStore = useUserStore()
        return {userStore}
    },
    // mounted() {
        // this.$nextTick(() => {
        //     setTimeout(() => {
        //         const modalContent = this.$el.querySelector('.modal-content');
        //         if (modalContent) {
        //             modalContent.classList.add('shake-animation');
        //         }
        //     }, 100);
        // });
    // },
    data() {
        return {
            coolDown: 0,
            isSmsLogin: false,
            username: '',
            password: '',
            phone: '',
            verificationCode: ''
        }
    },
    methods: {
        closeAndClear() {
            this.username = ''
            this.password = ''
            this.phone = ''
            this.verificationCode = ''
            this.isSmsLogin= false
            this.userStore.loginCardVisible = false
        },


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
                this.closeAndClear()
            }
        },
        login() {
            // 处理登录逻辑
            console.log('Login attempt:', this.username, this.password)
            // 登录成功后关闭弹窗
            UserApi.login(this.username, this.password).then(res => {
                console.log(res)
                if (res.data.success) {
                    //保存token
                    localStorage.setItem('token', res.data.data.token)
                    this.userStore.isLoggedIn = true
                    // 显示toast
                    useToastStore().showToast({
                        message: 'Next Blog 欢迎你，' + res.data.data.username,
                        title: '😊登陆成功！',
                        type: 'success',  // 可以是 'success'、'error' 或 'info'
                        duration: 3000
                    });

                    // 短暂延迟后进行路由导航
                    setTimeout(() => {
                        this.userStore.loginCardVisible = false
                        // 导航到新页面
                        // this.$router.push('/explore');
                    }, 100);  // 100ms 的延迟，确保登录弹窗已经关闭
                } else {
                    console.log('登陆失败：' + res.data.errMessage)
                    useToastStore().showToast({
                        message: '官话：' + res.data.errMessage,
                        title: '😭登陆失败',
                        type: 'error',  // 可以是 'success'、'error' 或 'info'
                        duration: 3000
                    });
                }
            }).catch(err => {

            })
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
  z-index: 10;
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

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  position: relative; // 为了正确定位关闭按钮

  &.shake-animation {
    animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  padding: 0;
  line-height: 1;

  &:hover {
    color: #000;
  }
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
