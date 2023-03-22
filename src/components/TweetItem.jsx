import styles from "styles/components/tweetItem.module.css"
// import { ReactComponent as Avatar } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like-sm.svg"
import { useState } from "react"
import { ShadowModal, ReplyModal } from "components/Modals"

const TweetItemContainer = ({
  className,
  children,
  tweetAuthorAvatar,
  tweetAuthorName,
  tweetAuthorAccount,
  createTime,
  description,
}) => {
  return (
    <div className={styles[className]}>
      <div className={styles.tweetAuthorAvatar}>
        <img src={tweetAuthorAvatar} alt="" />
        <span className={styles.grayLine}></span>
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
        <footer className={styles.tweetFooter}>{children}</footer>
      </div>
    </div>
  )
}

const ReplyLikeBox = ({ id, replyCounts, likeCounts }) => {
  const [show, setShow] = useState(false)
  const [replyId, setReplyId] = useState() //記錄點擊哪一筆tweet的reply

  const handleClose = () => setShow(false)
  const handleReplyClick = () => {
    setReplyId(id)
    setShow(true)
  }

  return (
    <>
      <div className={styles.replyBox}>
        <Reply onClick={handleReplyClick} />
        {show && (
          <>
            <ShadowModal show={show} onHide={handleClose} />
            <ReplyModal show={show} onHide={handleClose} replyId={replyId} />
          </>
        )}
        {replyCounts}
      </div>
      <div className={styles.likeBox}>
        <Like />
        {likeCounts}
      </div>
    </>
  )
}

const ReplyToBox = ({ tweetAuthorAccount }) => {
  return (
    <div className="p-md">
      回覆給 <span className={styles.accountStyle}>@{tweetAuthorAccount}</span>
    </div>
  )
}

export const TweetItem = (props) => {
  return (
    <TweetItemContainer
      className="tweetItemContainer"
      {...props}
      children={<ReplyLikeBox {...props} />}
    />
  )
}

export const ReplyTweetItem = (props) => {
  return (
    <TweetItemContainer
      className="ReplyTweetItemContainer"
      {...props}
      children={<ReplyToBox {...props} />}
    />
  )
}
