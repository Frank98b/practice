/**
 * 封装axios请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'x'// 基础路径
})

export default request
