import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { registerApi } from "api/CRUD"
//---------------------------------
export default function RegisterPage() {
  //記錄各個 input 的值----
  const [ account, setAccount ] = useState('')
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ checkPassword, setCheckPassword ] = useState('')
  //記錄各個 input 的狀態----
  const [ acconutWarning, setAccoundWarning] = useState(null)
  const [ nameWarning, setNameWarning] = useState(null)
  const [ emailWarning, setEmailWarning] = useState(null)
  const [ passwordWarning, setPasswordlWarning] = useState(null)
  const [ checkPasswordWarning, setCheckPasswordlWarning] = useState(null)
  const navigate = useNavigate()

  //記錄要告訴 inputBox 有什麼緊告狀況
  const state = {
    toMatch:'字數太多',
    blank: '內容不能空白！',
    repeated: ' 已重覆註冊！',
    different: '密碼輸入不相符！',
  }
  //送出表單會做的事 1.一個個判斷有沒有超字, 空白 2.API送出表單 3.判斷回傳訊並呼應想對動作----
  async function handleSubmit(){
    if(account.trim() === ''){
      setAccoundWarning(state.blank)
    }
    if(name.trim() === ''){
      setNameWarning(state.blank)
    }
    if(email.trim() === ''){
      setEmailWarning(state.blank)
    }
    if(password.trim() === ''){
      setPasswordlWarning(state.blank)
    }
    if(checkPassword.trim() === ''){
      setCheckPasswordlWarning(state.blank)
      return
    }
    if(password !== checkPassword){
      setCheckPasswordlWarning(state.different)
      return 
    }
    //這裡才開始串 API ---
    const data = await registerApi(
      account, name, email, password, checkPassword
    )
    //註冊成功的話跳到登入頁---
    if(data.status === 'success'){
      return  navigate('/login')
    }
    //註冊失敗的話看錯誤訊息 
    if(data.message){
      switch(data.message){
        case 'account 已重複註冊！':
          return  setAccoundWarning(`account ${state.repeated}`)
        case 'email 已重複註冊！':
          return  setEmailWarning(`email${state.repeated}`)
        case '密碼輸入不相符！':
          return  setCheckPasswordlWarning(state.different)
        default:
          return null
      }
    }
  }

  return (
    <div className="container">
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="建立你的帳號" />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            label="帳號" 
            placeHolder="請輸入帳號" 
            value={account}
            state={acconutWarning}
            handleChange={(e)=>{
              setAccount(e.target.value)
              acconutWarning && setAccoundWarning(null)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            label="名稱" 
            placeHolder="請輸入使用者名稱" 
            value={name}
            state={nameWarning}
            handleChange={(e)=>{
              setName(e.target.value)
              nameWarning && setNameWarning(null)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={emailWarning && 'error'}
            label="Email" 
            type="email" 
            placeHolder="請輸入 Email" 
            value={email}
            state={emailWarning}
            handleChange={(e)=>{
              setEmail(e.target.value)
              emailWarning && setEmailWarning(null)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox 
            className={passwordWarning && 'error'}
            label="密碼" 
            type="password" 
            placeHolder="請設定密碼" 
            value={password}
            state={passwordWarning}
            handleChange={(e)=>{
              setPassword(e.target.value)
              passwordWarning && setPasswordlWarning(null)
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox
            className={checkPasswordWarning && 'error'}
            label="確認密碼"
            type="password"
            placeHolder="請再次輸入密碼"
            value={checkPassword}
            state={checkPasswordWarning}
            handleChange={(e)=>{
              setCheckPassword(e.target.value)
              checkPasswordWarning && setCheckPasswordlWarning(null)
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
