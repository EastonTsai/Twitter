import { TweetItem } from "components/TweetItem"
import { getAllTweets } from "api/twitter"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const TweetsList = () => {
  const [allTweets, setAlltweets] = useState([])
  const navigate = useNavigate()

  const handleClickTweet = (e) => {
    const targetTagName = e.target.tagName
    const tweetId = e.target.dataset.id
    return (
      targetTagName === "MAIN" &&
      navigate("/tweet", { state: { data: { tweetId } } })
    )
  }

  useEffect(() => {
    const getAllTweetsAsync = async () => {
      try {
        const allTweets = await getAllTweets()
        setAlltweets(allTweets.map((tweet) => ({ ...tweet })))
      } catch (error) {
        console.error(error)
      }
    }
    getAllTweetsAsync()
  }, [])

  return (
    <div className="listContainer}">
      {allTweets.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} onClick={handleClickTweet} />
      ))}
    </div>
  )
}
