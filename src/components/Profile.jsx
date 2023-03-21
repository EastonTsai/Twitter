import styles from "styles/components/profile.module.css"
import { Btn } from "./Common"

export const Profile = ({
  coverPage,
  avatar,
  name,
  account,
  introduction,
  followingCounts,
  followerCounts,
}) => {
  return (
    <div className={styles.profileContainer}>
      <header className={styles.coverPage}>
        <img src={coverPage} alt="" />
      </header>
      <main className={styles.middleBox}>
        <img className={styles.avatar} src={avatar} alt="" />
        <Btn className="btnRound" text="編輯個人資料" />
      </main>
      <footer className={`p-md ${styles.userInfo}`}>
        <h5>{name}</h5>
        <div className={styles.userAccount}>@{account}</div>
        <div className={styles.userIntroduction}>{introduction}</div>
        <div className={styles.followContainer}>
          <div className={styles.following}>
            <span className={styles.followCount}>{followingCounts} 個</span>
            <span className={styles.followText}>跟隨中</span>
          </div>
          <div className={styles.follower}>
            <span className={styles.followCount}>{followerCounts} 位</span>
            <span className={styles.followText}>跟隨者</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
