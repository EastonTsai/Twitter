import { Header } from "components/Header"
import { InputBox, Btn } from "components/Common"
import styles from "styles/pages/loginPage.module.css"
import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <div className="container">
      <div className={styles.fixedWidth}>
        <div className="row justify-content-center">
          <Header title="建立你的帳號" />
        </div>
        <div className={styles.inputRow}>
          <InputBox label="帳號" type="text" placeHolder="請輸入帳號" />
        </div>
        <div className={styles.inputRow}>
          <InputBox label="名稱" type="text" placeHolder="請輸入使用者名稱" />
        </div>
        <div className={styles.inputRow}>
          <InputBox label="Email" type="email" placeHolder="請輸入 Email" />
        </div>
        <div className={styles.inputRow}>
          <InputBox label="密碼" type="password" placeHolder="請設定密碼" />
        </div>
        <div className={styles.inputRow}>
          <InputBox
            label="確認密碼"
            type="password"
            placeHolder="請再次輸入密碼"
          />
        </div>
        <div className={styles.btnRow}>
          <Btn className="btnRoundColor" text="註冊" />
        </div>
        <div className={styles.linkCenterRow}>
          <Link to="/login">取消</Link>
        </div>
      </div>
    </div>
  )
}
