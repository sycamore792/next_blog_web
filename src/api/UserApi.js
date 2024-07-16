import axios from 'axios';
import axiosInstance, { API_URL } from '@/api/BaseApi';
import {md5} from "js-md5";

export default {

//     用户登录
    login(account = "", password = "") {
        return axiosInstance.post(`/v1/user_login_service/login_by_account`,{
            account: account,
            password: md5(password)
        });
    },
//     获取用户基本信息
    getUserInfo(userId = "") {
        return axiosInstance.get(`/v1/user_info_service/user_info/${userId}`);
    },

};
