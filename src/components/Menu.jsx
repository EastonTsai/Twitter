import { ReactComponent as Logo } from "files/icon/logo.svg"
import { ReactComponent as Home } from "files/icon/home.svg"
import { ReactComponent as User } from "files/icon/user.svg"
import { ReactComponent as Control } from "files/icon/control.svg"
import { Btn } from "components/Common"
import styles from "styles/components/menu.module.css"
import { NavLink } from "react-router-dom"

export const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <ul className={styles.menuBox}>
        <li className={styles.menuItem}>
          <NavLink
            to="/tweets"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <Home />
            <h5>首頁</h5>
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <User />
            <h5>個人資料</h5>
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/setting"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <Control />
            <h5>設定</h5>
          </NavLink>
        </li>
      </ul>
      <Btn className="btnRoundColor" text="推文" />
    </div>
  )
}
