import { ReplyItem } from "components/ReplyItem"
import { getUserReplies } from "api/twitter"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function UserReplyList() {
  const [userReplies, setUserReplies] = useState([])
  const userId = useLocation().state.data.id

  useEffect(() => {
    const getUserRepliesAsync = async () => {
      try {
        const replies = await getUserReplies(Number(userId))
        setUserReplies(replies.map((reply) => ({ ...reply })))
      } catch (error) {
        console.error(error)
      }
    }
    getUserRepliesAsync()
  }, [userId])

  return (
    <div className="listContainer}">
      {userReplies.map((reply) => (
        <ReplyItem
          key={reply.id}
          avatar={reply.User.avatar}
          name={reply.User.name}
          account={reply.User.account}
          replyAccount={reply.Tweet.User.account}
          comment={reply.comment}
        />
      ))}
    </div>
  )
}
