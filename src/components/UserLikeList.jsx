import { TweetItem } from "components/TweetItem"

export default function UserLikeList() {
  return (
    <div className="listContainer}">
      {/* 串api中 */}
      {/* {dummyData.data.map((tweet) => (
          <TweetItem key={tweet.id} {...tweet} />
        ))} */}
    </div>
  )
}

// ## GET /api/users/:id/likes
// 瀏覽某個使用者按過喜歡的內容(按過讚的內容)
