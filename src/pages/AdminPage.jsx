import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { adminApi } from "api/CRUD"

export default function Admin() {
  const [ account, setAccount ] = useState('')
  const [ password, setPassword ] = useState('')
  //記錄錯誤狀態
  const [ accountError, setAccountError ] = useState(false)
  const [ passwordError, setPasswordError ] = useState(false)
  const [ wordNumberError, setWordNumberError ] = useState(false)
  const [ tokenError, setTokenError ] = useState(false)
  const navigate = useNavigate()
  
  async function handleSubmit (){
    if(account.length >= 50){
      setWordNumberError(true)
    }
    if(account.length < 1 || account.trim() === ''){
      setAccountError(true)
    }
    if(password.length < 1 || password.trim() === ''){
      setPasswordError(true)
      return
    }
    const data = await adminApi(account, password)
    if(data.token){
      localStorage.setItem('authToken',data.token)
      return  navigate('/controller/tweetList')
    }
    if(data.message){
      setTokenError(true)
    }
  }
  const handleKeyEnter = (e)=>{
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }
  return (
    <div 
      className="container"
      onKeyDown={(e) => {handleKeyEnter(e)}}
    >
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="後台登入" />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={ 
              accountError ? 'error' : 
              wordNumberError ? 'error' : 
              tokenError ? 'error' : null 
            }
            label="帳號" 
            type="text" 
            value={account}
            placeHolder="請輸入帳號" 
            warningMessage={
              accountError ? '內容不可空白！' : 
              wordNumberError ? '字數超過上限囉！' : 
              tokenError ? '帳號不存在！' : null 
            }
            onChange={(e)=>{
              if(accountError){ 
                setAccountError(null)}              
                setAccount(e.target.value)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={
              passwordError ? 'error' :
              tokenError ? 'error' : null
            }
            label="密碼" 
            type="password" 
            value={password}
            placeHolder="請輸入密碼" 
            warningMessage={
              passwordError ? '內容不可空白！' :
              tokenError ? '密碼錯誤！' : null
            }
            onChange={(e)=>{
              if(passwordError){ setPasswordError(null) }
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className={styles.btnRow}>
          <Btn 
            className="btnRoundColor" 
            text="登入" 
            onClick={handleSubmit}
          />
        </div>
        <div className={styles.linkRow}>
          <Link to="/login">前台登入</Link>
        </div>
      </div>
    </div>
  )
}
