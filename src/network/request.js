/* 导入axios */
import axios from 'axios'
/* 导出请求 */
export function request (config) {
    /* 创建axios实例 */
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        timeout: 5000 
    })
    /* 设置请求拦截 */
    instance.interceptors.request.use((config) => {
        return config
    }, (err) => {
        console.log(err)
    })
    /* 设置响应拦截 */
    instance.interceptors.response.use((res) => {
        return res
    }, (err) => {
        console.log(err)
    })
    /* 返回一个promise对象 */
    return instance(config)
}