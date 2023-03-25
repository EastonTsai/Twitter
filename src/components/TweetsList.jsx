import { TweetItem } from "components/TweetItem"
import { getAllTweets } from "api/twitter"
import { useEffect, useState } from "react"

export const TweetsList = () => {
  const [allTweets, setAllTweets] = useState([])

  useEffect(() => {
    const getAllTweetsAsync = async () => {
      try {
        const allTweets = await getAllTweets()
        console.log(allTweets[0])
        setAllTweets(allTweets.map((tweet) => ({ ...tweet })))
      } catch (error) {
        console.error(error)
      }
    }
    getAllTweetsAsync()
  }, [])

  return (
    <div className="listContainer}">
      {allTweets.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
