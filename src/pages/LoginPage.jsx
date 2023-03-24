import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginApi } from "api/CRUD"

export default function LoginPage() {
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(){
    console.log(account , '  ' , password)
    if(account.length < 1 || password.length < 1){
      return
    }
    const data = await loginApi(account, password)
    console.log(data)
    if(data.token){
      localStorage.setItem('authToken', data.token)
      return  navigate('/tweets')
    } 
    //登入 '失敗' 的話 do something... 
    setError(true)
  }

  return (
    <div className="container">
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="登入 Alphitter" />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={error === true && 'error'}
            label="帳號" 
            type="text" 
            placeHolder="請輸入帳號" 
            value={account}
            warningMessage={error === true && '帳號不存在'}
            handleChange={(e)=>{
              if(error === true){ setError(false) }
              setAccount(e.target.value)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={error === true && 'error'}
            label="密碼" 
            type="password" 
            placeHolder="請輸入密碼" 
            value={password}
            warningMessage={error === true && '密碼有誤'}
            handleChange={(e)=>{
              if(error === true){ setError(false) }
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className={styles.btnRow}>
          <Btn 
            className="btnRoundColor" 
            text="登入" 
            handleClick={handleSubmit}
          />
        </div>
        <div className={styles.linkRow}>
          <Link to="/register">註冊</Link>
          <span className={styles.dot}></span>
          <Link to="/admin">後台登入</Link>
        </div>
      </div>
    </div>
  )
}
