import { ReplyItem } from "components/ReplyItem"

export default function UserReplyList() {
  return (
    <div className="listContainer}">
      {dummyData.data.map((item) => (
        <ReplyItem
          key={item.id}
          avatar={userDummyData.data.avatar}
          name={userDummyData.data.name}
          account={userDummyData.data.account}
          replyAccount={item.User.account}
          comment={item.comment}
        />
      ))}
    </div>
  )
}

// ## GET /api/users/:id/replied_tweets
// **瀏覽特定使用者的所有回覆(依create 時間排序，最新在前)**

const dummyData = {
  data: [
    {
      id: 1,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      Tweet: {
        id: "tweet_id",
      },
      User: {
        id: "user_id",
        account: "account1",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
    {
      id: 2,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      Tweet: {
        id: "tweet_id",
      },
      User: {
        id: "user_id",
        account: "account2",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
    {
      id: 3,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      Tweet: {
        id: "tweet_id",
      },
      User: {
        id: "user_id",
        account: "account3",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
    {
      id: 4,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      Tweet: {
        id: "tweet_id",
      },
      User: {
        id: "user_id",
        account: "account4",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
    {
      id: 5,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
      Tweet: {
        id: "tweet_id",
      },
      User: {
        id: "user_id",
        account: "account5",
      },
      createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
      updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    },
  ],
}

// ## GET /api/users/:id
// **瀏覽特定使用者**
const userDummyData = {
  data: {
    id: 5,
    account: "user5",
    name: "user5",
    email: "user5@example.com",
    avatar: "https://picsum.photos/300/300?text=1",
    coverPage: "http://xxx.xxx",
    createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
    updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    followingCounts: 12,
    followerCounts: 10,
  },
}
