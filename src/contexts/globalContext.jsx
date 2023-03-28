import { createContext, useState } from "react";
import axios from "axios";
import { jwt } from 'jsonwebtoken'
// import * as jwt from 'jsonwebtoken'

//*建立這個 Context 的目的: 為是把全站都用得的資放在一個好取得的地方, 方便各元件取用
//* 1. 我先 const 一個我希望裡面有什麼東西 (資料 )
const defaultContext = {
  isAuthenticated: false, //* 判斷我們的身份是不是在 '已登入' 的狀態下
  currentMember: null, //* 登入者的個人基本資料, 如 id ( 基本上會是 token 解析出來的資料 )
}
const AuthContext = createContext(defaultContext) 
export const AuthProvider = async ({children}) => {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  const [ currentMember, setCurrentMember ] = useState(null)

  const baseUrl = 'https://aqueous-tor-51893.herokuapp.com/api'
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

//* 2.isAuthenticated 和 currentMember 是怎麼得到的: 先看本機有沒有 token, 有的話用 jwt.decode(token) 解出裡面的 id, 再帶著 id 發一支 API, 如果回傳的不是 'error', 代表本機的 token 是可用的 (驗證通過), 最後把結果用 useState 記錄起來
const checkTokenIsValid = async ()=>{
  const token = localStorage.getItem('authToken')
  if(!token){
    setIsAuthenticated(false)
    setCurrentMember(null)
    return
  }
  const tempPayload = jwt.decode(token)
  try{
    const res = await axiosInstance.get(`${baseUrl}/users/${tempPayload.id}`)
    if(res !== "error"){
      setCurrentMember(tempPayload)
      setIsAuthenticated(true)
      return 'success' //成功的話回傳 'success'
    }
  }
  catch(error){
    return error.response.data.status //* 得到 'error'
  }
}

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated,
        currentMember,
        checkTokenIsValid,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;





