import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginApi } from "api/twitterAPI"

export default function LoginPage() {
  //1.記錄每個 input 顯示值
  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")
  //2.記錄每個 input 會發生的錯誤情況有幾種
  const [accountError, setAccountError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [wordNumberError, setWordNumberError] = useState(false)
  const [tokenError, setTokenError] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit() {
    //1.送出後, 先判斷 input 有沒有超長或空白
    if(account.length >= 50){
      setWordNumberError(true)
    }
    if (account.trim().length <= 0) {
      setAccountError(true)
    }
    if (password.trim().length <= 0) {
      setPasswordError(true)
    }
    if(
      account.trim().length > 0 &&
      password.trim().length > 0
    ){
      //2. 發出請求
      const data = await loginApi(account, password)
      if (data.status === "error") {
        console.log("後端 message: ", data.message)
        setTokenError(true)
        return
      }
      localStorage.setItem("authToken", data.token)
      localStorage.setItem("id", data.user.id)
      alert('登入成功')
      return navigate("/tweets")
    }
  }
  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }
  return (
    <div
      className="container"
      onKeyDown={(e) => {
        handleKeyEnter(e)
      }}
    >
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="登入 Alphitter" />
        </div>
        <div className={styles.inputRow}>
          <InputBox
            className={
              accountError
                ? "error"
                : wordNumberError
                ? "error"
                : tokenError
                ? "error"
                : null
            }
            label="帳號"
            type="text"
            placeHolder="請輸入帳號"
            value={account}
            warningMessage={
              accountError
                ? "內容不可空白！"
                : wordNumberError
                ? "字數超過上限囉！"
                : tokenError
                ? "帳號不存在！"
                : null
            }

//* <<<<<<< HEAD
            onChange={(e)=>{
              if(accountError){ 
                if(wordNumberError){setWordNumberError(null)}
                setAccountError(null)}              
                setAccount(e.target.value)
//* =======
            // onChange={(e) => {
            //   if (accountError) {
            //     setAccountError(null)
            //   }
            //   setAccount(e.target.value)
//* >>>>>>> main

            }}
          />
        </div>
        <div className={styles.inputRow}>
          <InputBox
            className={passwordError ? "error" : tokenError ? "error" : null}
            label="密碼"
            type="password"
            placeHolder="請輸入密碼"
            value={password}
            warningMessage={
              passwordError
                ? "內容不可空白！"
                : tokenError
                ? "密碼錯誤！"
                : null
            }
            //* <<<<<<< HEAD
            onChange={(e) => {
              if (wordNumberError) {
                setWordNumberError(null)
              }
              if (passwordError) {
                setPasswordError(null)
              }
              //* =======
              // onChange={(e) => {
              //   if (passwordError) {
              //     setPasswordError(null)
              //   }
              //* >>>>>>> main
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className={styles.btnRow}>
          <Btn className="btnRoundColor" text="登入" onClick={handleSubmit} />
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
