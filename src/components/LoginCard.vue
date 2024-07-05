<template>
    <div class="modal " @click="closeModal">
        <div class="modal-content">
            <h2>登录查看更多</h2>
            <p>Choose one of the option to go</p>
            <form @submit.prevent="login">
                <input type="email" v-model="email" placeholder="get@ziontutorial.com" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <p class="or-continue">Or continue with</p>
                <div class="social-login">
                    <button type="button" class="social-btn google"><img src="@/assets/Google.png" alt="Google">
                    </button>
                    <button type="button" class="social-btn facebook"><img src="@/assets/Facebook.png" alt="Meta"></button>
                    <button type="button" class="social-btn apple"><img src="@/assets/Apple.png" alt="Apple">
                    </button>
                </div>
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
            email: '',
            password: ''
        }
    },
    methods: {
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

.modal {
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
