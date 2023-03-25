import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerApi } from "api/CRUD"

export default function RegisterPage() {
  const [ account, setAccount ] = useState('')
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ checkPassword, setCheckPassword ] = useState('')
  const [ isError, setIsError ] = useState(false)
  const [ checkPasswordError, setCheckPasswordError ] = useState(false)
  const [ nameError, setNameError ] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(){
    console.log(account, name, email, password, checkPassword)
    if( account.length <= 0 || name.length <= 0 || email.length <= 0 || password.length <= 0 ){
      return 
    }
    if(password !== checkPassword){
      setCheckPasswordError(true)
      return 
    }
    const data = await registerApi(
      account, name, email, password, checkPassword
    )
    console.log(data)
    if(data.status === 'success'){
      return  navigate('/login')
    }
    //登入 '失敗' 的話 do something... 
    
    setIsError(true)
  }

  return (
    <div className="container">
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="建立你的帳號" />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={isError === true && 'error'}
            label="帳號" 
            type="text" 
            placeHolder="請輸入帳號" 
            value={account}
            warningMessage={isError === true && 'account 己重複註冊'}
            handleChange={(e)=>{
              if(isError === true){ setIsError(false) }
              setAccount(e.target.value)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={nameError === true && 'error'}
            label="名稱" 
            type="text" 
            placeHolder="請輸入使用者名稱" 
            value={name}
            warningMessage={nameError === true && '最多 50 個字'}
            handleChange={(e)=>{
              if(name.length > 50){ setNameError(true)}
              if(name.length < 50){ setNameError(false)}
              setName(e.target.value)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={isError === true && 'error'}
            label="Email" 
            type="email" 
            placeHolder="請輸入 Email" 
            value={email}
            warningMessage={isError === true && 'email 己重複註冊'}
            handleChange={(e)=>{
              if(isError === true){ setIsError(false) }
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            label="密碼" 
            type="password" 
            placeHolder="請設定密碼" 
            value={password}
            handleChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox
            className={isError === true && 'error'}
            label="確認密碼"
            type="password"
            placeHolder="請再次輸入密碼"
            value={checkPassword}
            warningMessage={checkPasswordError === true && '2 次輸入的密碼不同'}
            handleChange={(e)=>{
              if(isError === true){ setCheckPasswordError(false) }
              setCheckPassword(e.target.value)
            }}
          />
        </div>
        <div className={styles.btnRow}>
          <Btn 
            className="btnRoundColor" 
            text="註冊" 
            onClick={handleSubmit}
          />
        </div>
        <div className={styles.linkCenterRow}>
          <Link to="/login">取消</Link>
        </div>
      </div>
    </div>
  )
}
