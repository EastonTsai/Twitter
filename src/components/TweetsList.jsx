import { TweetItem } from "components/TweetItem"
import { useState, useEffect } from "react"
import { getAllTweets } from "api/twitter"

export const TweetsList = () => {
  const [allTweets, setAllTweets] = useState([])

  useEffect(() => {
    const getAllTweetsAsync = async () => {
      try {
        const allTweets = await getAllTweets()
        setAllTweets(allTweets.map((tweet) => ({ ...tweet })))
      } catch (error) {
        console.error(error)
      }
    }
    getAllTweetsAsync()
  }, [])

  return (
    <div className="listContainer}">
      {allTweets?.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
