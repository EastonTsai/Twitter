import axios from 'axios'

const baseUrl = 'https://aqueous-tor-51893.herokuapp.com/api'


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
export const getAdminTweets = async (token) => {
  try{
    const data = await axios.get(`${baseUrl}/admin/tweets`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data
  }
  catch(error){
    console.error('請求失敗', error)
  }
}
//後台取使用者清單 / 預計回傳 陣列
export const getAdminUsers = async (token) => {
  try{
    const data = await axios.get(`${baseUrl}/admin/users`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data
  }
  catch(error){
    console.error('請求失敗', error)
  }
}

//後台刪除推文清單
export const deleteTweet = async (id) => {
  try{
    await axios.delete(`${baseUrl}/admin/tweets/:${id}`
)
    return '成功刪除'
  }
  catch(error){
    console.error('刪除失敗', error)
  }
}

