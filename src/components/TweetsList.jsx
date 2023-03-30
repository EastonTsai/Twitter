import { TweetItem } from "components/TweetItem"
import { useState, useEffect, useContext } from "react"
import { getAllTweets } from "api/twitterAPI"
import { NewTweetContext } from "contexts/NewTweetContext"

export const TweetsList = ({userAvatar}) => {

  const [allTweets, setAllTweets] = useState([])
  const { newPost } = useContext(NewTweetContext)

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
  }, [newPost])

  return (
    <div className="listContainer}">
      {allTweets?.map((tweet) => (
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
          userAvatar={userAvatar}
        />
      ))}
    </div>
  )
}
