import axios from 'axios'

const baseUrl = 'https://aqueous-tor-51893.herokuapp.com/api'

//使用 axios.interceptors 的方法夾帶 token 送出請求
const axionInstance = axios.create({baseURL: baseUrl})
axionInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  },
  (error)=>{
    console.error('驗證失敗', error)
  }
)

//login 的發送 , 請傳入 '帳號', '密碼' 共 2 個參數
export const loginApi = async (account, password) => {
  try{
    const res = await axios.post(`${baseUrl}/users/login`, {
      account,
      password,
    })
    return res.data
  }
  catch(error){
    return (
      console.log("登入發送失敗"),
      error
    )
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
    return (
      console.log("登入發送失敗"),
      error
    )
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
    console.log('發送有成功')
    return res.data
  }
  catch(error){
    return (
      console.log("登入發送失敗", error)
    )
  }
}


//後台取推文清單 / 預計回傳 陣列
export const getAdminTweets = async () => {
  try{
    const data = await axionInstance.get(`${baseUrl}/admin/tweets`)
    return data
  }
  catch(error){
    return '請求失敗'
  }
}

//後台取使用者清單 / 預計回傳 陣列
export const getAdminUsersApi = async () => {
  try{
    const data = await axionInstance.get(`${baseUrl}/admin/users`)
    return data
  }
  catch(error){
    return '請求失敗'
  }
}

//後台刪除推文清單
export const deleteTweetApi = async (id) => {
  
  try{
    const res = await axionInstance.delete(`${baseUrl}/admin/tweets/${id}`)
    return res
  }
  catch(error){
    console.error('發送失敗', error)
  }
}
//取得某個使用者的所有追隨者
export const getUserFollowersApi = async (id) => {
  console.log(id)
  try{
    const res = await axionInstance.get(`${baseUrl}/users/${id}/followings`)
    return res.data //回傳陣列
  }
  catch(error){
    console.error('傳送失敗', error)
  }
}
//取得某個使用者的所有追蹤對象
export const getUserFollowingsApi = async (id) => {
  console.log(id)
  try{
    const res = await axionInstance.get(`${baseUrl}/users/${id}/followers`)
    return res.data //回傳陣列
  }
  catch(error){
    console.error('傳送失敗', error)
  }
}
//新增推文 
export const addTweet = async(text) => {
  try{
    const res = await axionInstance.post(`${baseUrl}/tweets`,{
      description : text 
      } )
    const data = res.data
    console.log('回傳的是: ', res)
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
    const res = await axionInstance.get(`${baseUrl}/tweets`)
    return res.data
  }
  catch(error){
    console.error('Get 失敗', error)
  }
}
