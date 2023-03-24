import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { adminApi } from "api/CRUD"

export default function Admin() {
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()
  const [ isError, setIsError ] = useState(false)

  async function handleSubmit (){
    if(account.length <= 0 || password.length <= 0){
      return
    }
    const data = await adminApi(account, password)
    console.log(data)
    if(data.token){
      localStorage.setItem('adminToken', data.token)
      return  navigate('/controller/tweetList')
    }
    //登入 '失敗' 的話 do something... 
    setIsError(true)

  }

  return (
    <div className="container">
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="後台登入" />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={isError === true && 'error'}
            label="帳號" 
            type="text" 
            value={account}
            placeHolder="請輸入帳號" 
            warningMessage={isError === true && '帳號不存在'}
            handleChange={(e)=>{
              if(isError === true){ setIsError(false) }
              setAccount(e.target.value)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={isError === true && 'error'}
            label="密碼" 
            type="password" 
            value={password}
            placeHolder="請輸入密碼" 
            warningMessage={isError === true && '密碼有誤'}
            handleChange={(e)=>{
              if(isError === true){ setIsError(false) }
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
          <Link to="/login">前台登入</Link>
        </div>
      </div>
    </div>
  )
}
