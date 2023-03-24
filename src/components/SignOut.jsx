import { ReactComponent as SigOutIcon } from 'files/icon/logout.svg'
import styles from 'styles/components/signOut.module.css'
import { useNavigate } from 'react-router'
export default function SignOut (){
  const navigate = useNavigate()
    const handleSignOut = ()=>{
      localStorage.removeItem('token')
      localStorage.removeItem('id')
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