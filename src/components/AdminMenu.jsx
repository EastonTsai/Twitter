import { ReactComponent as Logo } from "files/icon/logo.svg"
import { ReactComponent as Home } from "files/icon/home.svg"
import { ReactComponent as User } from "files/icon/user.svg"
import styles from "styles/components/menu.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import SignOut from "./SignOut"


//這一段是 '貼上' Menu 元件的內容修改而來的
export const AdminMenu = () => {

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <ul className={styles.menuBox}>
        <li className={styles.menuItem}>
          <NavLink
            to="/controller/tweetList"
            className={({ isActive }) => isActive ? `${styles.active}` : undefined}
          >
            <Home />
            <h5>推文清單</h5>
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/controller/userList"
            className={({ isActive }) => isActive ? `${styles.active}` : undefined}
          >
            <User />
            <h5>使用者列表</h5>
          </NavLink>
        </li>
      </ul>
      <div className={styles.SignOut}>
        <SignOut/>
      </div>
    </div>
  )
}
