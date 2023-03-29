import styles from "styles/pages/settingPage.module.css"
import { InputBox2, Btn } from "components/Common"
import { useEffect, useState } from "react"
import { getUserAccount, patchSetting } from "api/CRUD"

export default function SettingPage() {
  //記錄各個 input 的值----
  const [account, setAccount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checkPassword, setCheckPassword] = useState("")
  //記錄各個 input 的狀態----
  const [ accountWarning, setAccountWarning] = useState(null)
  const [ nameWarning, setNameWarning] = useState(null)
  const [ emailWarning, setEmailWarning] = useState(null)
  const [ passwordWarning, setPasswordWarning] = useState(null)
  const [ checkPasswordWarning, setCheckPasswordWarning] = useState(null)

  //記錄要告訴 inputBox 有什麼緊告狀況
  const state = {
    tooMatch: "字數太多",
    blank: "內容不能空白！",
    repeated: " 已重覆註冊！",
    different: "密碼輸入不相符！",
  }
  //一開始進到 setting 頁面要取自己的帳別資訊
  useEffect(() => {
    const getAccountData = async () => {
      const id = localStorage.getItem("id")
      const data = await getUserAccount(id)
      if (data) {
        setAccount(data.account)
        setName(data.name)
        setEmail(data.email)
      }
    }
    getAccountData()
  }, [])

  //送出表單會做的事 1.一個個判斷有沒有超字, 空白 2.API送出表單 3.判斷回傳訊並呼應想對動作----

  const handleSubmit = async () => {
    if(account.length +1 >= 50){ setAccountWarning(state.tooMatch) }
    if (name.length +1 >= 50) { setNameWarning(state.tooMatch) }
    if(account.trim().length <= 0){ setAccountWarning(state.blank) }
    if (name.trim().length <= 0) { setNameWarning(state.blank) }
    if (email.trim().length <= 0) { setEmailWarning(state.blank) }
    if (password !== checkPassword) { setCheckPasswordWarning(state.different) }
    if( //判斷每一項都沒問題才去串 api
      account.length +1 < 50 &&
      name.length +1 < 50 &&
      account.trim().length > 0 &&
      email.trim().length > 0 &&
      password === checkPassword
    ){
      //這裡才開始串 API ---
      const payload = { account, name, email, password, checkPassword }
      const id = localStorage.getItem("id")
      const data = await patchSetting(id, payload)
      if(data.message){
        switch(data.message){
          case 'account 已重複註冊！':
            return setAccountWarning(`account ${state.repeated}`)
          case 'email 已重複註冊！':
            return  setEmailWarning(`email ${state.repeated}`)
          case '密碼輸入不相符！':
            return  setCheckPasswordWarning(state.different)
          default:
            break
        }
      }
      alert("已儲存新的設定")
      //強制重整頁面
      window.location.reload()
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }
  return (
    <main className="col-6" onKeyDown={handleKeyDown}>
      <div className={styles.settingContainer}>
        <h4>帳號設定</h4>
        <div className={styles.inputContainer}>
          <InputBox2
            label="帳號"
            value={account}
            placeHolder={"請輸入要更新的帳號"}
            wordCount={"50"}
            state={accountWarning}
            handleChange={(e) => {
              setAccount(e.target.value)
              accountWarning && setAccountWarning(null)
            }}
          />
          <InputBox2
            label="名稱"
            value={name}
            placeHolder={"請輸入要更新的名稱"}
            wordCount={"50"}
            state={nameWarning}
            handleChange={(e) => {
              setName(e.target.value)
              nameWarning && setNameWarning(null)
            }}
          />
          <InputBox2
            className={emailWarning && "error"}
            label="Email"
            type="email"
            value={email}
            placeHolder={"請輸入要更新的 email"}
            state={emailWarning}
            handleChange={(e) => {
              setEmail(e.target.value)
              emailWarning && setEmailWarning(null)
            }}
          />
          <InputBox2
            className={passwordWarning && "error"}
            label="密碼"
            type="password"
            value={password}
            placeHolder={"請輸入密碼"}
            state={passwordWarning}
            handleChange={(e) => {
              setPassword(e.target.value)
              passwordWarning && setPasswordWarning(null)
            }}
          />
          <InputBox2
            className={checkPasswordWarning && "error"}
            label="密碼再確認"
            type="password"
            value={checkPassword}
            placeHolder={"請再次輸入密碼"}
            state={checkPasswordWarning}
            handleChange={(e) => {
              setCheckPassword(e.target.value)
              checkPasswordWarning && setCheckPasswordWarning(null)
            }}
          />
        </div>
        <Btn className="btnRoundColor" text="儲存" onClick={handleSubmit} />
      </div>
    </main>
  )
}
