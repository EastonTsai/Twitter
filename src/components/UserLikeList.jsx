import { TweetItem } from "components/TweetItem"
import { getUserLikes } from "api/twitter"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function UserLikeList() {
  const [userLikes, setUserLikes] = useState([])
  const userId = useLocation().state.data.id

  useEffect(() => {
    const getUserLikesAsync = async () => {
      try {
        const likes = await getUserLikes(Number(userId))
        setUserLikes(likes.map((like) => ({ ...like })))
      } catch (error) {
        console.error(error)
      }
    }
    getUserLikesAsync()
  }, [userId])

  return (
    <div className="listContainer}">
      {userLikes.map((like) => (
        <TweetItem
          key={like.id}
          id={like.TweetId}
          userId={like.Tweet.User.id}
          avatar={like.Tweet.User.avatar}
          name={like.Tweet.User.name}
          account={like.Tweet.User.account}
          createdAt={like.Tweet.createdAt}
          description={like.Tweet.description}
          replyCounts={like.replyCounts}
          likeCounts={like.likeCounts}
          isLiked={like.isLiked}
        />
      ))}
    </div>
  )
}
