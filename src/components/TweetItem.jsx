import styles from "styles/components/tweetItem.module.css"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like-sm.svg"
import { ReactComponent as Liked } from "files/icon/liked.svg"
import { useState } from "react"
import { ShadowModal, ReplyModal } from "components/Modals"
import { handleLikeClick, transformRelativeTime } from "components/Common"
import { useNavigate } from "react-router-dom"

const TweetItemContainer = ({
  id,
  userId,
  className,
  children,
  avatar,
  name,
  account,
  createdAt,
  description,
  onClick,
  onUserClick,
  userAvatar,
}) => {
  const relativeTime = transformRelativeTime(createdAt)
  return (
    <div className={styles[className]} onClick={onClick}>
      <div className={styles.tweetAuthorAvatar}>
        {!avatar ? (
          <Default onClick={() => onUserClick?.({ userId })} />
        ) : (
          <img
            src={avatar}
            alt="avatar"
            onClick={() => onUserClick?.({ userId })}
          />
        )}
        <span className={styles.grayLine}></span>
      </div>
      <div className={styles.tweetContent}>
        <header className={styles.tweetAuthor}>
          <div
            className={`p-bold ${styles.tweetAuthorName}`}
            onClick={() => onUserClick?.({ userId })}
          >
            {name}
          </div>
          <div
            className={styles.tweetAuthorAccount}
            onClick={() => onUserClick?.({ userId })}
          >
            @{account}．
          </div>
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
  likeCounts,
  isLiked,
  userAvatar,
}) => {

  const [show, setShow] = useState(false)
  const [tweet, setTweet] = useState({}) //記錄點擊的tweet內容
  const [replyTotal, setReplyTotal] = useState(replyCounts)
  // *--多記錄愛心的狀態和數字--------------------------
  const [likeCount, setLikeCount] = useState(likeCounts)
  const [isLike, setIsLike] = useState(isLiked)
  // *------------------------------------------------
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
              tweetReply
              userAvatar={userAvatar}
            />
          </>
        )}
        {replyTotal}
      </div>
      <div className={styles.likeBox}>
        {isLike === true ? (
          <Liked
            onClick={() => {
              handleLikeClick?.({ id: id, isLiked: isLike })
              //*----點擊得 set...
              setLikeCount(()=>likeCount-1)
              setIsLike(!isLike)
            }}
          />
        ) : (
          <Like
            onClick={() => {
              //*----這個原本沒記錄的話, 等於點第一次是若 isLiked: true, 第二次還會是 true , api 有報錯, 沒影響程式繼續
              handleLikeClick?.({ id: id, isLiked: isLike })
              setLikeCount(()=>likeCount+1)
              setIsLike(!isLike)
            }}
          />
        )}
        {likeCount}
      </div>
    </>
  )
}

export const TweetItem = (props) => {

  const navigate = useNavigate()
  const handleClickTweet = (e) => {
    const targetTagName = e.target.tagName
    const targetId = e.target.dataset.id
    return (
      targetTagName === "MAIN" &&
      navigate("/tweet", { state: { data: { targetId } } })
    )
  }
  const handleUserClick = ({ userId }) => {
    const id = userId
    navigate("/profile", { state: { data: { id } } })
  }
  return (
    <TweetItemContainer
      className="tweetItemContainer"
      {...props}
      children={<ReplyLikeBox {...props} />}
      onClick={handleClickTweet}
      onUserClick={handleUserClick}
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
