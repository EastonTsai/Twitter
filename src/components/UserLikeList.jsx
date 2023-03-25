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
        <TweetItem key={like.id} {...like.Tweet} {...like} />
      ))}
    </div>
  )
}
