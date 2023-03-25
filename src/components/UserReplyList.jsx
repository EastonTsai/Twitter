import { ReplyItem } from "components/ReplyItem"
import { getUserReplies } from "api/twitter"
import { useState, useEffect } from "react"

export default function UserReplyList() {
  const [userReplies, setUserReplies] = useState([])

  useEffect(() => {
    const getUserRepliesAsync = async () => {
      const userId = localStorage.getItem("id")
      try {
        const replies = await getUserReplies(Number(userId))
        setUserReplies(replies.map((reply) => ({ ...reply })))
      } catch (error) {
        console.error(error)
      }
    }
    getUserRepliesAsync()
  }, [])

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
