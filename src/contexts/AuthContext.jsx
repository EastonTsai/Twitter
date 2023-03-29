import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: null,
})
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [ adminIsToken, setAdminIsToken ] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // useEffect(()=>{
  //   (()=>{

  //     if(!isAuthenticated){
  //       const token = localStorage.getItem('authToken')
  //       if(token){
  //         setIsAuthenticated(true)
  //         navigate('tweets')
  //         return
  //       }
  //       if(
  //           location.pathname !== 'login' ||
  //           location.pathname !== 'register' ||
  //           location.pathname !== 'admin'
  //         ){
  //           setIsAuthenticated(false)
  //           navigate('login')
  //       }
  //     }}
  //   )()
  // },[location.pathname])
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        // adminIsToken,
        // setAdminIsToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
