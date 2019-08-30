import router from 'umi/router';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { message } from 'antd';

/**
 * 全局接口响应状态码枚举
 * @description Success      正常
 * @description UnLogin      未登录
 * @description NoPermission 没有权限
 */
enum GlobalResponseCode {
    Success = 0,
    UnLogin = -1,
    NoPermission = 403
}

/**
 * 全局请求扩展配置
 */
const axiosConfig = {
    success: (config: AxiosRequestConfig) => {
        config.headers['Accept'] = 'application/json';
        config.withCredentials = true;
        return config;
    },
    error: (error: any) => Promise.reject(error)
};

/**
 * 全局请求响应处理
 * @see http://www.axios-js.com/
 */
const axiosResponse = {
    success: ({ data }: AxiosResponse<any>) => {
        const errno = data ? +data.errno : -110;
        switch (true) {
            // 接口正常
            case errno === GlobalResponseCode.Success:
                return data.data;
            // 未登录
            case errno === GlobalResponseCode.UnLogin:
                window.location.href = data.loginUrl;
                return null;
            // 没有权限
            case errno === GlobalResponseCode.NoPermission:
                router.push('/forbidden');
                return null;
            // 接口异常
            default:
                // message.error(data.error_msg || '系统错误，请稍后再试！');
                return Promise.reject();
        }
    },
    error: (error: any) => Promise.reject(error)
};

axios.interceptors.request.use(axiosConfig.success, axiosConfig.error);
axios.interceptors.response.use(axiosResponse.success, axiosResponse.error);

export default axios;
