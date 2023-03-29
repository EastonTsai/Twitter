import { Link, useLocation } from "react-router-dom"
import styles from "styles/components/profile.module.css"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Notice } from "files/icon/notice.svg"
import { ReactComponent as Mail } from "files/icon/mail.svg"
import { Btn } from "components/Common"
import { ShadowModal, EditModal } from "components/Modals"
import { useState } from "react"
import { followUser, unFollowUser } from "api/twitterAPI"

export const Profile = ({
  coverPage,
  avatar,
  name,
  account,
  introduction,
  isFollowed,
  followingCounts,
  followerCounts,
  tweetCounts,
  setProfile,
}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // 現在profile顯示的user id
  const currentId = useLocation().state.data.id
  // 當前登入者的user id
  const loginId = localStorage.getItem("id")
  // 點擊追蹤或正在追蹤按鈕
  const [isFollowedState, setIsFollowedState] = useState(isFollowed)
  const handleFollowBtnClick = async () => {
    try {
      if (isFollowedState) {
        await unFollowUser(Number(currentId))
      } else {
        await followUser(Number(currentId))
      }
      setIsFollowedState(!isFollowedState)
    } catch (error) {
      console.error(error)
    }
  }

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
        {Number(currentId) === Number(loginId) ? (
          <Btn className="btnRound" text="編輯個人資料" onClick={handleShow} />
        ) : (
          <div className={styles.btnContainer}>
            <Btn className="btnRound" text={<Mail />} />
            <Btn className="btnRound" text={<Notice />} />
            <Btn
              className={isFollowedState ? "btnRoundColor" : "btnRound"}
              text={isFollowedState ? "正在追隨" : "跟隨"}
              onClick={handleFollowBtnClick}
              dataId={currentId}
            />
          </div>
        )}

        {show && (
          <>
            <ShadowModal show={show} onHide={handleClose} />
            <EditModal
              show={show}
              setShow={setShow}
              onHide={handleClose}
              coverPage={coverPage}
              avatar={avatar}
              name={name}
              introduction={introduction}
              setProfile={setProfile}
            />
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
              state={{ data: { currentId, name, tweetCounts } }}
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
              state={{ data: { currentId, name, tweetCounts } }}
            >
              <span className={styles.followText}>跟隨者</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
