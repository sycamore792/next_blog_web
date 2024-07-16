<template>
    <div class="profile-container">
        <div class="back-button">
            <img @click="goBack" src="@/assets/goback_icon.png" alt="Go Back"/>
        </div>
        <div class="profile-header">
            <img class="profile-avatar" src="@/assets/avatar.jpg" alt="Profile Avatar"/>
            <h2>{{this.userInfo.username}}</h2>
        </div>
        <div class="profile-stats">
            <div class="stat">
                <strong>{{ this.userInfo.postCount }}</strong>
                <span>Post</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
                <strong>{{ this.userInfo.followers }}</strong>
                <span>Followers</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
                <strong>{{ this.userInfo.following }}</strong>
                <span>Following</span>
            </div>
        </div>
    </div>
</template>

<script>
import UserApi from "@/api/UserApi.js";
import {useToastStore} from "@/store/toast";

export default {
    name: "UserProfile",
    methods: {
        goBack() {
            this.$router.push('/explore');
        },
        getUserInfo(userId) {
            //获取用户信息
            UserApi.getUserInfo(userId).then(res => {
                if (!res.data.success){
                    useToastStore().showToast({
                        message: '官话：'+res.data.errMessage,
                        title: '😭获取用户信息失败',
                        type: 'error',  // 可以是 'success'、'error' 或 'info'
                        duration: 3000
                    });
                }else {
                    this.userInfo = res.data.data;
                }
            }).catch(err => {
                useToastStore().showToast({
                    message: "服务器异常或者网络波动",
                    title: '😭系统繁忙！',
                    type: 'error',  // 可以是 'success'、'error' 或 'info'
                    duration: 3000
                });
            })
        }
    },created() {
        //获取用户id
        this.userInfo.id = this.$route.params.id;
        this.getUserInfo(this.userInfo.id);
    },
    data() {
        return {
            userInfo: {
                id:null,
                username:"",
                avatar:"",
                bio:"",
                followers:0,
                following:0,
                postCount:0,
                isFollowing:false
            }
        }
    }
}
</script>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.back-button {
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
}

.profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.profile-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.profile-header h2 {
    margin-top: 10px;
    font-size: 24px;
}

.profile-stats {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 30%;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-align: center;
}

.stat strong {
    font-size: 20px;
}

.stat span {
    font-size: 16px;
    color: gray;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background-color: gray;
}
</style>

<!--<template>-->
<!--    <div class="profile-container">-->
<!--        <div class="back-button">-->
<!--            <img @click="goBack" src="@/assets/goback_icon.png" alt="Go Back"/>-->
<!--        </div>-->
<!--        <div class="profile-header">-->
<!--            <img class="profile-avatar" src="@/assets/avatar.jpg" alt="Profile Avatar"/>-->
<!--            <h2>Sycamore</h2>-->
<!--        </div>-->
<!--        <div class="profile-stats">-->
<!--            <div class="stat">-->
<!--                <strong>20</strong>-->
<!--                <span>Post</span>-->
<!--            </div>-->
<!--            <div class="stat-divider"></div>-->
<!--            <div class="stat">-->
<!--                <strong>221</strong>-->
<!--                <span>Followers</span>-->
<!--            </div>-->
<!--            <div class="stat-divider"></div>-->
<!--            <div class="stat">-->
<!--                <strong>221</strong>-->
<!--                <span>Following</span>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    name: "UserProfile",-->
<!--    methods: {-->
<!--        goBack() {-->
<!--            this.$router.push('/explore');-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.profile-container {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    padding: 20px;-->
<!--}-->

<!--.back-button {-->
<!--    align-self: flex-end;-->
<!--    margin-right: 20px;-->
<!--    margin-top: 20px;-->
<!--}-->

<!--.profile-header {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    margin-top: 20px;-->
<!--}-->

<!--.profile-avatar {-->
<!--    width: 100px;-->
<!--    height: 100px;-->
<!--    border-radius: 50%;-->
<!--    object-fit: cover;-->
<!--}-->

<!--.profile-header h2 {-->
<!--    margin-top: 10px;-->
<!--    font-size: 24px;-->
<!--}-->

<!--.profile-stats {-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    margin-top: 20px;-->
<!--}-->

<!--.stat {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    margin: 0 10px;-->
<!--}-->

<!--.stat strong {-->
<!--    font-size: 20px;-->
<!--}-->

<!--.stat span {-->
<!--    font-size: 16px;-->
<!--    color: gray;-->
<!--}-->

<!--.stat-divider {-->
<!--    width: 1px;-->
<!--    height: 40px;-->
<!--    background-color: gray;-->
<!--}-->
<!--</style>-->
