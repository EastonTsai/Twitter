import styles from "styles/components/tweetItem.module.css"
// import { ReactComponent as Avatar } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like-sm.svg"
import { useState } from "react"
import { ShadowModal, ReplyModal } from "components/Modals"
import { transformRelativeTime } from "components/Common"

const TweetItemContainer = ({
  id,
  className,
  children,
  avatar,
  name,
  account,
  createdAt,
  description,
  onClick,
}) => {
  const relativeTime = transformRelativeTime(createdAt)

  return (
    <div className={styles[className]} onClick={onClick}>
      <div className={styles.tweetAuthorAvatar}>
        <img src={avatar} alt="" />
        <span className={styles.grayLine}></span>
      </div>
      <div className={styles.tweetContent}>
        <header className={styles.tweetAuthor}>
          <div className={`p-bold ${styles.tweetAuthorName}`}>{name}</div>
          <div className={styles.tweetAuthorAccount}>@{account}．</div>
          <div className={styles.createTime}>{relativeTime}</div>
        </header>
        <main className={styles.description} data-id={id}>
          {description}
        </main>
        <footer className={styles.tweetFooter}>{children}</footer>
      </div>
    </div>
  )
}

const ReplyLikeBox = ({ id, replyCounts, likedCounts }) => {
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
        {likedCounts}
      </div>
    </>
  )
}

const ReplyToBox = ({ account }) => {
  return (
    <div className="p-md">
      回覆給 <span className={styles.accountStyle}>@{account}</span>
    </div>
  )
}

export const TweetItem = (props) => {
  const userProps = props.User
  // const navigate = useNavigate()
  // const tweetId = props.id
  // const handleClick = (e) => {
  //   console.log(e.target.tagName)
  //   const targetTagName = e.target.tagName
  //   return (
  //     targetTagName === "MAIN" &&
  //     navigate("/tweet", { state: { tweetId: { tweetId } } })
  //   )
  // }
  return (
    <TweetItemContainer
      className="tweetItemContainer"
      {...props}
      {...userProps}
      children={<ReplyLikeBox {...props} />}
    />
  )
}

export const ReplyTweetItem = (props) => {
  const userProps = props.User
  return (
    <TweetItemContainer
      className="ReplyTweetItemContainer"
      {...props}
      {...userProps}
      children={<ReplyToBox {...userProps} />}
    />
  )
}
