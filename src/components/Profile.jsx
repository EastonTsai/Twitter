import { Link } from "react-router-dom"
import styles from "styles/components/profile.module.css"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Notice } from "files/icon/notice.svg"
import { ReactComponent as Mail } from "files/icon/mail.svg"
import { Btn } from "components/Common"
import { ShadowModal, EditModal } from "components/Modals"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export const Profile = ({
  coverPage,
  avatar,
  name,
  account,
  introduction,
  followingCounts,
  followerCounts,
  className,
}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // 現在profile顯示的user id
  const currentId = useLocation().state.data.id
  // 當前登入者的user id
  const loginId = localStorage.getItem("id")

  return (
    <div className={styles.profileContainer}>
      <header className={styles.coverPage}>
        <img src={coverPage} alt="" />
      </header>
      <main className={styles.middleBox}>
        {!avatar ? (
          <Default />
        ) : (
          <img className={styles.avatar} src={avatar} alt="avatar" />
        )}
        {currentId === Number(loginId) ? (
          <Btn className="btnRound" text="編輯個人資料" onClick={handleShow} />
        ) : (
          <div className={styles.btnContainer}>
            <Btn className="btnRound" text={<Mail />} />
            <Btn className="btnRound" text={<Notice />} />
            <Btn className="btnRound" text="正在追隨" />
          </div>
        )}

        {show && (
          <>
            <ShadowModal show={show} onHide={handleClose} />
            <EditModal show={show} onHide={handleClose} />
          </>
        )}
      </main>
      <footer className={`p-md ${styles.userInfo}`}>
        <h5>{name}</h5>
        <div className={styles.userAccount}>@{account}</div>
        <div className={styles.userIntroduction}>{introduction}</div>
        <div className={styles.followContainer}>
          <div className={styles.following}>
            <span className={styles.followCount}>{followingCounts} 個</span>

            <Link
              to={{
                pathname: "/follows",
                search: "index= 1",
              }}
            >
              <span className={styles.followText}>跟隨中</span>
            </Link>
          </div>

          <div className={styles.follower}>
            <span className={styles.followCount}>{followerCounts} 位</span>
            <Link
              to={{
                pathname: "/follows",
                search: "index= 0",
              }}
            >
              <span className={styles.followText}>跟隨者</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
