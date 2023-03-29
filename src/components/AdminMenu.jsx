import { ReactComponent as Logo } from "files/icon/logo.svg"
import { ReactComponent as Home } from "files/icon/home.svg"
import { ReactComponent as HomeFilled } from "files/icon/home-filled.svg"
import { ReactComponent as User } from "files/icon/user.svg"
import { ReactComponent as UserFilled } from "files/icon/user-filled.svg"
import styles from "styles/components/menu.module.css"
import { NavItem } from "components/Menu"
import SignOut from "components/SignOut"

//這一段是 '貼上' Menu 元件的內容修改而來的
export const AdminMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <ul className={styles.menuBox}>
        <NavItem
          link="/controller/tweetList"
          title="推文清單"
          icon={<Home />}
          activeIcon={<HomeFilled />}
        />
        <NavItem
          link="/controller/userList"
          title="使用者列表"
          icon={<User />}
          activeIcon={<UserFilled />}
        />
      </ul>
      <div className={styles.SignOut}>
        <SignOut />
      </div>
    </div>
  )
}
