import axios from 'axios';
import axiosInstance from '@/api/BaseApi';

export default {

//     获取博客列表
    getBlogList(pageIndex = 1, pageSize = 10) {
        return axiosInstance.get(`/v1/blog_service/list_by_param?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    },

//     获取博客详情
    getBlogDetail(id) {
        return axiosInstance.get(`/v1/blog_service/blog_detail/${id}`);
    },
};
