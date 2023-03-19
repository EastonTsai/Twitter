import { ReactComponent as Logo } from "files/icon/logo.svg"
import { ReactComponent as Home } from "files/icon/home.svg"
import { ReactComponent as User } from "files/icon/user.svg"
import { ReactComponent as Control } from "files/icon/control.svg"
import { Btn } from "components/Common"
import styles from "styles/components/menu.module.css"

export const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuBox}>
        <li className={styles.menuItem}>
          <Logo />
        </li>
        <li className={styles.menuItem}>
          <Home />
          <h5>首頁</h5>
        </li>
        <li className={styles.menuItem}>
          <User />
          <h5>個人資料</h5>
        </li>
        <li className={styles.menuItem}>
          <Control />
          <h5>設定</h5>
        </li>
      </ul>
      <Btn className="btnRoundColor" text="推文" />
    </div>
  )
}
