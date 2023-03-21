import styles from "styles/components/tweetItem.module.css"
// import { ReactComponent as Avatar } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like-sm.svg"

export const TweetItem = ({
  tweetAuthorAvatar,
  tweetAuthorName,
  tweetAuthorAccount,
  createTime,
  description,
  likeCounts,
  replyCounts,
}) => {
  return (
    <div className={styles.tweetItemContainer}>
      <div className={styles.tweetAuthorAvatar}>
        <img src={tweetAuthorAvatar} alt="" />
      </div>
      <div className={styles.tweetContent}>
        <header className={styles.tweetAuthor}>
          <div className={`p-bold ${styles.tweetAuthorName}`}>
            {tweetAuthorName}
          </div>
          <div className={styles.tweetAuthorAccount}>@{tweetAuthorAccount}</div>
          <div className={styles.createTime}>{createTime}</div>
        </header>
        <main className={styles.description}>{description}</main>
        <footer className={styles.tweetFooter}>
          <div className={styles.replyBox}>
            <Reply />
            {replyCounts}
          </div>
          <div className={styles.likeBox}>
            <Like />
            {likeCounts}
          </div>
        </footer>
      </div>
    </div>
  )
}
