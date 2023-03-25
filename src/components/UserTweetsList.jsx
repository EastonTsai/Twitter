import { TweetItem } from "components/TweetItem"
import { getUserTweets } from "api/twitter"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function UserTweetsList() {
  const [userTweets, setUserTweets] = useState([])
  const countTweets = userTweets.length
  // console.log(countTweets) 傳回ProfilePage及OtherProfilePage 用useContext?
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
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
