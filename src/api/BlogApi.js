import axios from 'axios';

const API_URL = 'http://localhost'; // 替换为你的 API 基础 URL

export default {
    sendVerificationCode(phone) {
        return axios.post(`${API_URL}/send-verification-code`, { phone });
    },
    loginWithEmail(email, password) {
        return axios.post(`${API_URL}/login-email`, { email, password });
    },
    loginWithPhone(phone, verificationCode) {
        return axios.post(`${API_URL}/login-phone`, { phone, verificationCode });
    },
//     博客列表
    getBlogList(pageIndex = 1, pageSize = 10) {
        return axios.get(`${API_URL}/v1/blog_service/list_by_param?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    },
};
