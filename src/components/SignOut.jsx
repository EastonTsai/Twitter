import { ReactComponent as SigOutIcon } from 'files/icon/logout.svg'
import styles from 'styles/components/signOut.module.css'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import AuthContext from 'contexts/AuthContext'

export default function SignOut (){
  const navigate = useNavigate()
  const context = useContext(AuthContext)

    const handleSignOut = ()=>{
      localStorage.removeItem('authToken')
      localStorage.removeItem('id')
      context.setIsAuthenticated(false)
    navigate('/login')
  }
  return(
    <>
      <div 
        className={styles.signOutIcon}
        onClick={handleSignOut}

      >
        <div><SigOutIcon/></div>
        <span>登出</span>
      </div>
    </>
  )
}