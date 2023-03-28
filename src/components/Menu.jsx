import { ReactComponent as Logo } from "files/icon/logo.svg"
import { ReactComponent as Home } from "files/icon/home.svg"
import { ReactComponent as User } from "files/icon/user.svg"
import { ReactComponent as Control } from "files/icon/control.svg"
import { Btn } from "components/Common"
import { ShadowModal, TweetModal } from "components/Modals"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from "styles/components/menu.module.css"
import SignOut from "components/SignOut"
import { getUserProfile } from "api/twitter"

const NavItem = ({ link, title, icon }) => {
  const id = localStorage.getItem("id")
  return (
    <li className={styles.menuItem}>
      <NavLink
        to={link}
        state={{ data: { id } }}
        className={({ isActive }) => (isActive ? `${styles.active}` : "")}
      >
        {icon}
        <h5>{title}</h5>
      </NavLink>
    </li>
  )
}
export const Menu = ({ handleAllTweets }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const loginId = localStorage.getItem("id")
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const profile = await getUserProfile(Number(loginId))
        setAvatar(profile.avatar)
      } catch (error) {
        console.error(error)
      }
    }
    getAvatar()
  }, [])

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <ul className={styles.menuBox}>
        <NavItem link="/tweets" title="首頁" icon={<Home />} />
        <NavItem link="/profile" title="個人資料" icon={<User />} />
        <NavItem link="/setting" title="設定" icon={<Control />} />
      </ul>
      <Btn className="btnRoundColor" text="推文" onClick={handleShow} />
      {show && (
        <>
          <ShadowModal show={show} onHide={handleClose} />
          <TweetModal
            show={show}
            onHide={handleClose}
            handleAllTweets={handleAllTweets}
            avatar={avatar}
          />
        </>
      )}
      <SignOut />
    </div>
  )
}
