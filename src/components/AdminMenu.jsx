import { ReactComponent as Logo } from "files/icon/logo.svg"
import { ReactComponent as Home } from "files/icon/home.svg"
import { ReactComponent as User } from "files/icon/user.svg"
import styles from "styles/components/menu.module.css"
import { NavLink } from "react-router-dom"


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
            to="/controler/tweetList"
            className={({ isActive }) => isActive && `${styles.active}`}
          >
            <Home />
            <h5>推文清單</h5>
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink
            to="/controler/userList"
            className={({ isActive }) => isActive && `${styles.active}`}
          >
            <User />
            <h5>使用者列表</h5>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
