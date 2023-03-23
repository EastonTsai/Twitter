import { RecommendBoard } from "components/RecommendBoard"
import { ReactComponent as Back } from "files/icon/back.svg"
import { ReactComponent as Reply } from "files/icon/reply.svg"
import { ReactComponent as Like } from "files/icon/like.svg"
import { ReplyItem } from "components/ReplyItem"
import styles from "styles/pages/tweetPage.module.css"
import { Link, useLocation } from "react-router-dom"
import { ShadowModal, ReplyModal } from "components/Modals"
import { useState } from "react"

const TweetContainer = ({
  avatar,
  description,
  name,
  account,
  createdAt,
  replyCounts,
  likeCounts,
}) => {
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
        <div className="p-md">{createdAt}</div>
      </main>
      <footer className={styles.tweetFooter}>
        <div className="reply">
          {replyCounts} <span>回覆</span>
        </div>
        <div className="like">
          {likeCounts} <span>喜歡次數</span>
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
          <ReplyModal show={show} onHide={handleClose} replyId={tweetId} />
        </>
      )}
      <Like />
    </div>
  )
}

export default function TweetPage() {
  const res = dummyData
  const resUser = dummyData.user
  const replyData = dummyReplyData.data
  // 取得點擊的tweetId，呼叫api時要用的
  const tweetId = useLocation().state.tweetId

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className={styles.backStyle}>
          <Link to="/tweets">
            <Back />
          </Link>
          <h4>推文</h4>
        </div>
        <TweetContainer {...res} {...resUser} />
        <ReplyLikeBox tweetId={tweetId} />
        {replyData.map((reply) => (
          <ReplyItem
            key={reply.id}
            avatar={reply.user.avatar}
            name={reply.user.name}
            account={reply.user.account}
            replyAccount={resUser.account}
            createTime={reply.createdAt}
            comment={reply.comment}
          />
        ))}
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}

// ## GET /api/tweets/:id
// **瀏覽特定推文**
const dummyData = {
  id: 5,
  description:
    "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
  user: {
    id: 1,
    name: "user_name",
    account: "user_account",
    avatar: "https://picsum.photos/300/300?text=5",
  },
  createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
  updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
  likeCounts: 10,
  replyCounts: 30,
}

// ## GET /api/tweets/:tweet_id/replies
// **瀏覽特定推文的所有回覆**
const dummyReplyData = {
  data: [
    {
      id: 1,
      comment: "text",
      user: {
        id: 1,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=1",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
    {
      id: 5,
      comment: "text",
      user: {
        id: 2,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=2",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
    {
      id: 3,
      comment: "text",
      user: {
        id: 1,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=3",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
  ],
}
