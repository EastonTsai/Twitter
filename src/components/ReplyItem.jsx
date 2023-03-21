import styles from "styles/components/replyItem.module.css"
// import { ReactComponent as Avatar } from "files/icon/defaultAvatar.svg"

export const ReplyItem = ({
  avatar,
  name,
  account,
  createTime,
  replyAccount,
  comment,
}) => {
  return (
    <div className={styles.tweetItemContainer}>
      <div className={styles.tweetAuthorAvatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.tweetContent}>
        <header className={styles.tweetAuthor}>
          <div className={`p-bold ${styles.tweetAuthorName}`}>{name}</div>
          <div className={styles.tweetAuthorAccount}>@{account}</div>
          <div className={styles.createTime}>{createTime}</div>
        </header>
        <main className={`p-md ${styles.reply}`}>
          回覆
          <span className={styles.replyAccount}>@{replyAccount}</span>
        </main>
        <footer className={styles.comment}>{comment}</footer>
      </div>
    </div>
  )
}
