import axios from 'axios'

const baseUrl = 'https://aqueous-tor-51893.herokuapp.com/api'

//使用 axios.interceptors 的方法夾帶 token 送出請求
const axiosInstance = axios.create({baseURL: baseUrl})
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error)=>{
    console.error('驗證失敗', error.response.data)
  }
)
//後台使用的夾帶 token 發送請求
const axiosInstanceForAdmin = axios.create({baseURL: baseUrl})
axiosInstanceForAdmin.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminAuthToken')
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error)=>{
    console.error('驗證失敗', error.response.data)
  }
)

//login 的發送 
export const loginApi = async (account, password) => {
  try{
    const res = await axios.post(`${baseUrl}/users/login`, {
      account,
      password,
    })
    return res.data
  }
  catch(error){
    if(error.response.data){
      return error.response.data
    }
    return error
  }
}
//後台登入
export const adminApi = async (account, password) => {
  try{
    const res = await axios.post(`${baseUrl}/admin/login`, {
      account,
      password,
    })
    return res.data
  }
  catch(error){
    console.log(error.response.data.message)
    return error.response.data
  }
}
//註冊
export const registerApi = async (
  account,
  name,
  email,
  password,
  checkPassword,
) => {
  try{
    const res = await axios.post(`${baseUrl}/users`, {
      account,
      name,
      email,
      password,
      checkPassword,
    })
    return res.data
  }
  catch(error){
    console.log(error.response.data.message)
    return error.response.data
  }
}
//編輯帳號
export const patchSetting = async (id, payload) => {
  try{
    const res = await axiosInstance.put(`${baseUrl}/users/${id}/setting`,payload)
    return res.data
  }
  catch(error){
    //error 的 data 是在 error.response.data
    console.log(error.response.data.message)
    return error.response.data
  }
}
//後台取推文清單 / 預計回傳 陣列
export const getAdminTweets = async () => {
  try{
    const res = await axiosInstanceForAdmin.get(`${baseUrl}/admin/tweets`)
    return res.data
  }
  catch(error){
    // console.log('err',error)
    // console.log('err.res',error.response)
    // console.log('err.res.data',error.response.data)

    return error.response.data 
  }
}
//後台取使用者清單 / 預計回傳 陣列
export const getAdminUsersApi = async () => {
  try{
    const data = await axiosInstanceForAdmin.get(`${baseUrl}/admin/users`)
    return data
  }
  catch(error){
    return '請求失敗'
  }
}
//後台刪除推文清單
export const deleteTweetApi = async (id) => {
  
  try{
    const res = await axiosInstanceForAdmin.delete(`${baseUrl}/admin/tweets/${id}`)
    return res
  }
  catch(error){
    console.error('發送失敗', error)
  }
}
//取得某個使用者的所有追隨者
export const getUserFollowersApi = async (id) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/followings`)
    return res.data //回傳陣列
  }
  catch(error){
    console.error('傳送失敗', error)
  }
}
//取得某個使用者的所有追蹤對象
export const getUserFollowingsApi = async (id) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/users/${id}/followers`)
    return res.data //回傳陣列
  }
  catch(error){
    console.error('傳送失敗', error)
  }
}
//新增推文 
export const addTweet = async(text) => {
  try{
    const res = await axiosInstance.post(`${baseUrl}/tweets`,{
      description : text 
    })
    console.log('回傳的是: ', res)
    const data = res.data
    if(data.status === 'error'){
      return 'error'
    }
    return data
  }
  catch(error){
    console.error('Post 失敗', error)
  }
}
//取得所有推文
export const getAllTweets = async () => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/tweets`)
    return res.data
  }
  catch(error){
    console.error('Get 失敗', error)
  }
}
//瀏覽特定使用者
export const getUserAccount = async (id) => {
  try{
    const res = await axiosInstance.get(`${baseUrl}/users/${id}`)
    return res.data
  }
  catch(error){
    console.error('請求失敗', error)
  }
}