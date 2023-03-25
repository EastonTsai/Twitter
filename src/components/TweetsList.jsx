import { TweetItem } from "components/TweetItem"

export const TweetsList = ({allTweets}) => {

  return (
    <div className="listContainer}">
      {allTweets?.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}

export const dummyData = {
  data:[]
}