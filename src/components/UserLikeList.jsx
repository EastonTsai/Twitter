import { TweetItem } from "components/TweetItem"
import { dummyData } from "components/TweetsList"

export default function UserLikeList() {
  return (
    <div className="listContainer}">
      {dummyData.data.tweets.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}

// ## GET /api/users/:id/likes
// 瀏覽某個使用者按過喜歡的內容(按過讚的內容)
