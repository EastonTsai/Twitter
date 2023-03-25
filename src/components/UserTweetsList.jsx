import { TweetItem } from "components/TweetItem"
import { getUserTweets } from "api/twitter"
import { useState, useEffect } from "react"

export default function UserTweetsList() {
  const [userTweets, setUserTweets] = useState([])
  const countTweets = userTweets.length
  // console.log(countTweets) 傳回ProfilePage 用useContext?
  useEffect(() => {
    const userId = localStorage.getItem("id")
    const getUserTweetsAsync = async () => {
      try {
        const tweets = await getUserTweets(Number(userId))
        setUserTweets(tweets.map((tweet) => ({ ...tweet })))
      } catch (error) {
        console.error(error)
      }
    }
    getUserTweetsAsync()
  }, [])

  return (
    <div className="listContainer}">
      {userTweets.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
