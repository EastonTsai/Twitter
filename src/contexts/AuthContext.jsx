import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: null,
})
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdminAuthenticated, setAdminIsAuthenticated] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(()=>{
    (()=>{
      navigate('login')
    })()
  },[])
  
  useEffect(()=>{
    (()=>{
      if(
        location.pathname === '/login' ||
        location.pathname === '/register' ||
        location.pathname === '/admin'
      ){
        checkTokenWithFirstStage()
        return
      }
      if(
        location.pathname === '/controller' ||
        location.pathname === '/controller/tweetList' ||
        location.pathname === '/controller/userList'
      ){
        checkTokenWithAdminSecondStageInAdmin()
        return
      }
<<<<<<< HEAD
=======

>>>>>>> 87d49b4086b7600d004ccf934b4541acd6037496
      checkTokenWithSecondStage()
      return
    })()
  }, [location.pathname])
  //第一階段的判斷, 在登入頁, 註冊頁, 後台登入頁
  const checkTokenWithFirstStage = () => {
    const token = checkToken()
    if (token) {
      setIsAuthenticated(true)
      navigate("/tweets")
      return
    }
    setIsAuthenticated(false)
    const adminToken = checkAdminToken()
    if (adminToken) {
      setAdminIsAuthenticated(true)
      navigate("/controller/tweetList")
    }
    setAdminIsAuthenticated(false)
  }
  //第二階段的判斷, 在 '前台' 登入後的所有頁面
  const checkTokenWithSecondStage = () => {
    const token = checkToken()
    if (!token) {
      const adminToken = checkAdminToken()
      if (adminToken) {
        setAdminIsAuthenticated(true)
        navigate("/controller/tweetList")
        return
      }
      setIsAuthenticated(false)
      navigate("/login")
      return
    }
  }
  //第二階段的判斷, 在 後台' 登入後的所有頁面
  const checkTokenWithAdminSecondStageInAdmin = () => {
    const adminToken = checkAdminToken()
    if (!adminToken) {
      const token = checkAdminToken()
      if (token) {
        setIsAuthenticated(true)
        navigate("/tweets")
        return
      }
      setAdminIsAuthenticated(false)
      navigate("/login")
      return
    }
  }
  //查看有沒有 '前台' 的 token, 回傳 true/false
  const checkToken = () => {
    if (isAuthenticated) {
      return true
    }
    const token = localStorage.getItem("authToken")
    if (token) {
      return true
    }
    return false
  }
  //查看有沒有 '後台' 的 token, 回傳 true/false
  const checkAdminToken = () => {
    if (isAdminAuthenticated) {
      return true
    }
    const token = localStorage.getItem("adminAuthToken")
    if (token) {
      return true
    }
    return false
  }

  return (
    <AuthContext.Provider
      value={{
        checkTokenWithFirstStage,
        checkTokenWithSecondStage,
        checkTokenWithAdminSecondStageInAdmin,
        setIsAuthenticated,
        setAdminIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
