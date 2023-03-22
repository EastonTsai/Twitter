import axios from 'axios'

const baseUrl = 'https://aqueous-tor-51893.herokuapp.com/'

//login 的發送 , 請傳入 '帳號', '密碼' 共 2 個參數
export const loginApi = async (account, password) => {
  try{
    const res = await axios.post(`${baseUrl}/user/login`, {
      account,
      password,
    })
    console.log('發送有成功')
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
    const res = await axios.post(`${baseUrl}/user/login`, {
      account,
      password,
    })
    console.log('發送有成功')
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
    const res = await axios.post(`${baseUrl}/user/login`, {
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
      console.log("登入發送失敗"),
      error
    )
  }
}


