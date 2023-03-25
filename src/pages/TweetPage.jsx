import { RecommendBoard } from "components/RecommendBoard"
import { ReactComponent as Back } from "files/icon/back.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like.svg"
import { ReplyItem } from "components/ReplyItem"
import styles from "styles/pages/tweetPage.module.css"
import { Link, useLocation } from "react-router-dom"
import { ShadowModal, ReplyModal } from "components/Modals"
import { useState, useEffect } from "react"
import { transformDate } from "components/Common"
import { getTweet, getTweetReply } from "api/twitter"

const TweetContainer = ({
  avatar,
  description,
  name,
  account,
  createdAt,
  replyCounts,
  likedCounts,
}) => {
  const newDate = transformDate(createdAt)

  return (
    <div className={styles.tweetContainer}>
      <header className={styles.tweetHeader}>
        <div className={styles.avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.info}>
          <div className="p-bold">{name}</div>
          <div className="p-md">@ {account}</div>
        </div>
      </header>
      <main className={styles.tweetMain}>
        <div className={styles.description}>{description}</div>
        <div className="p-md-bold ">{newDate}</div>
      </main>
      <footer className={styles.tweetFooter}>
        <div className="reply">
          {replyCounts} <span>回覆</span>
        </div>
        <div className="like">
          {likedCounts} <span>喜歡次數</span>
        </div>
      </footer>
    </div>
  )
}

const ReplyLikeBox = ({ tweetId }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className={styles.replyLikeContainer}>
      <Reply onClick={handleShow} />
      {show && (
        <>
          <ShadowModal show={show} onHide={handleClose} />
          {/* 等ID串好再補上 */}
          {/* <ReplyModal show={show} onHide={handleClose} replyId={tweetId} /> */}
        </>
      )}
      <Like />
    </div>
  )
}

export default function TweetPage() {
  const [tweet, setTweet] = useState({})
  const [tweetReply, setTweetReply] = useState([])
  // 取得點擊的tweetId
  const tweetId = useLocation().state.data.tweetId

  // 取得貼文
  useEffect(() => {
    const getTweetAsync = async () => {
      try {
        const tweet = await getTweet(Number(tweetId))
        setTweet(tweet)
      } catch (error) {
        console.error(error)
      }
    }
    getTweetAsync()
  }, [])

  // 取得所有留言
  useEffect(() => {
    const getTweetReplyAsync = async () => {
      try {
        const tweetReply = await getTweetReply(Number(tweetId))
        setTweetReply(tweetReply.map((reply) => ({ ...reply })))
      } catch (error) {
        console.error(error)
      }
    }
    getTweetReplyAsync()
  }, [])

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className={styles.backStyle}>
          <Link to="/tweets">
            <Back />
          </Link>
          <h4>推文</h4>
        </div>
        <TweetContainer {...tweet} {...tweet.User} />
        {/* <ReplyLikeBox tweetId={tweetId} /> */}
        {tweetReply.map((reply) => (
          <ReplyItem key={reply.id} {...reply} {...reply.User} />
        ))}
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
