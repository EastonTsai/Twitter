import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="container">
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="登入 Alphitter" />
        </div>
        <div className={styles.inputRow}>
          <InputBox label="帳號" type="text" placeHolder="請輸入帳號" />
        </div>
        <div className={styles.inputRow}>
          <InputBox label="密碼" type="password" placeHolder="請輸入密碼" />
        </div>
        <div className={styles.btnRow}>
          <Btn className="btnRoundColor" text="登入" />
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
