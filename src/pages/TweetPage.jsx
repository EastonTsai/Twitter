import { RecommendBoard } from "components/RecommendBoard"
import { ReactComponent as Back } from "files/icon/back.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like.svg"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
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
  tweetTotal,
  likeCounts,
}) => {
  const newDate = transformDate(createdAt)

  return (
    <div className={styles.tweetContainer}>
      <header className={styles.tweetHeader}>
        <div className={styles.avatar}>
          {!avatar ? <Default /> : <img src={avatar} alt="avatar" />}
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
          {tweetTotal} <span>回覆</span>
        </div>
        <div className="like">
          {likeCounts} <span>喜歡次數</span>
        </div>
      </footer>
    </div>
  )
}

const ReplyLikeBox = ({ tweet, tweetReply, setTweetReply }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className={styles.replyLikeContainer}>
      <Reply onClick={handleShow} />
      {show && (
        <>
          <ShadowModal show={show} onHide={handleClose} />
          <ReplyModal
            show={show}
            setShow={setShow}
            onHide={handleClose}
            tweet={tweet}
            tweetReply={tweetReply}
            setTweetReply={setTweetReply}
          />
        </>
      )}
      <Like />
    </div>
  )
}

export default function TweetPage() {
  const [tweet, setTweet] = useState({})
  const [tweetReply, setTweetReply] = useState([])
  const tweetTotal = tweetReply.length
  // 取得點擊的tweetId
  const tweetId = useLocation().state.data.targetId

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
        <TweetContainer {...tweet} {...tweet.User} tweetTotal={tweetTotal} />
        <ReplyLikeBox
          tweet={tweet}
          tweetReply={tweetReply}
          setTweetReply={setTweetReply}
        />
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
