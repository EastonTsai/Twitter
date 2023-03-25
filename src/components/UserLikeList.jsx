import { TweetItem } from "components/TweetItem"
import { getUserLikes } from "api/twitter"
import { useState, useEffect } from "react"

export default function UserLikeList() {
  const [userLikes, setUserLikes] = useState([])

  useEffect(() => {
    const userId = localStorage.getItem("id")
    const getUserLikesAsync = async () => {
      try {
        const likes = await getUserLikes(Number(userId))
        setUserLikes(likes.map((like) => ({ ...like })))
      } catch (error) {
        console.error(error)
      }
    }
    getUserLikesAsync()
  }, [])

  return (
    <div className="listContainer}">
      {userLikes.map((like) => (
        <TweetItem key={like.id} {...like} />
      ))}
    </div>
  )
}
