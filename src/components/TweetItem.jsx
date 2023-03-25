import styles from "styles/components/tweetItem.module.css"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like-sm.svg"
import { useState } from "react"
import { ShadowModal, ReplyModal } from "components/Modals"
import { transformRelativeTime } from "components/Common"
import { useNavigate } from "react-router-dom"

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
        {!avatar ? <Default /> : <img src={avatar} alt="avatar" />}
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
        {className === "tweetItemContainer" ? (
          <footer className={styles.tweetFooter}>{children}</footer>
        ) : (
          <div className={styles.replyText}>
            回覆給 <span className={styles.accountStyle}>@{account}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const ReplyLikeBox = ({
  id,
  description,
  avatar,
  account,
  name,
  replyCounts,
  likedCounts,
}) => {
  const [show, setShow] = useState(false)
  const [tweet, setTweet] = useState({}) //記錄點擊的tweet內容
  const [replyTotal, setReplyTotal] = useState(replyCounts)
  const handleClose = () => setShow(false)
  const handleReplyClick = () => {
    setTweet({
      id: id,
      name: name,
      avatar: avatar,
      account: account,
      description: description,
    })
    setShow(true)
  }

  return (
    <>
      <div className={styles.replyBox}>
        <Reply onClick={handleReplyClick} />
        {show && (
          <>
            <ShadowModal show={show} onHide={handleClose} />
            <ReplyModal
              show={show}
              onHide={handleClose}
              tweet={tweet}
              setShow={setShow}
              setReplyTotal={setReplyTotal}
            />
          </>
        )}
        {replyTotal}
      </div>
      <div className={styles.likeBox}>
        <Like />
        {likedCounts}
      </div>
    </>
  )
}

export const TweetItem = (props) => {
  const userProps = props.User
  const navigate = useNavigate()
  const handleClickTweet = (e) => {
    const targetTagName = e.target.tagName
    const targetId = e.target.dataset.id
    return (
      targetTagName === "MAIN" &&
      navigate("/tweet", { state: { data: { targetId } } })
    )
  }
  return (
    <TweetItemContainer
      className="tweetItemContainer"
      {...userProps}
      {...props}
      children={<ReplyLikeBox {...userProps} {...props} />}
      onClick={handleClickTweet}
    />
  )
}

export const ReplyTweetItem = (props) => {
  const userProps = props.User
  return (
    <TweetItemContainer
      className="ReplyTweetItemContainer"
      {...userProps}
      {...props}
    />
  )
}
