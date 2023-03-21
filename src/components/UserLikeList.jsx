import { TweetItem } from "components/TweetItem"

export default function UserLikeList() {
  return (
    <div className="listContainer}">
      {dummyData.data.map((tweet) => (
        <TweetItem
          key={tweet.id}
          tweetAuthorAvatar={tweet.User.avatar}
          tweetAuthorName={tweet.User.name}
          tweetAuthorAccount={tweet.User.account}
          description={tweet.description}
          replyCounts={tweet.replyCounts}
          likeCounts={tweet.likeCounts}
        />
      ))}
    </div>
  )
}

// ## GET /api/users/:id/likes
// 瀏覽某個使用者按過喜歡的內容(按過讚的內容)

const dummyData = {
  data: [
    {
      id: 1,
      description: "text",
      User: {
        id: 1,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=1",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
      likeCounts: 10,
      replyCounts: 30,
    },
    {
      id: 2,
      description: "text",
      User: {
        id: 7,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=3",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
      likeCounts: 10,
      replyCounts: 30,
    },
    {
      id: 3,
      description: "text",
      User: {
        id: 2,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=4",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
      likeCounts: 10,
      replyCounts: 30,
    },
    {
      id: 4,
      description: "text",
      User: {
        id: 1,
        name: "user_name",
        account: "user_account",
        avatar: "https://picsum.photos/300/300?text=1",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
      likeCounts: 10,
      replyCounts: 30,
    },
  ],
}
