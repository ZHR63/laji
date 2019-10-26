import axios from "axios";

const service = axios.create({
  baseURL: 'http://zyxb.tianzhuowangluo.com/wechat/', // api 的 base_url
});

service.interceptors.response.use(response => {
    const res = response.data;
    return res;
}, error => {
  return Promise.reject(error)
})

export default service;
