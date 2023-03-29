import { TweetItem } from "components/TweetItem"
import { getUserTweets } from "api/twitterAPI"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function UserTweetsList() {
  const [userTweets, setUserTweets] = useState([])
  const userId = useLocation().state.data.id

  useEffect(() => {
    const getUserTweetsAsync = async () => {
      try {
        const tweets = await getUserTweets(Number(userId))
        setUserTweets(tweets.map((tweet) => ({ ...tweet })))
      } catch (error) {
        console.error(error)
      }
    }
    getUserTweetsAsync()
  }, [userId])

  return (
    <div className="listContainer}">
      {userTweets.map((tweet) => (
        <TweetItem
          key={tweet.id}
          id={tweet.id}
          userId={tweet.User.id}
          avatar={tweet.User.avatar}
          name={tweet.User.name}
          account={tweet.User.account}
          createdAt={tweet.createdAt}
          description={tweet.description}
          replyCounts={tweet.replyCounts}
          likeCounts={tweet.likeCounts}
          isLiked={tweet.isLiked}
        />
      ))}
    </div>
  )
}
