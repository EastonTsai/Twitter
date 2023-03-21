import { TweetItem } from "components/TweetItem"

export default function UserTweetsList() {
  return (
    <div className="listContainer}">
      {dummyData.data.tweets.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}

// ## **GET /api/users/:id/tweets**
// **瀏覽某個使用者的所有推文**
const dummyData = {
  data: {
    tweets: [
      {
        id: 1,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 2,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 3,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 4,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 5,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 6,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 7,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 1,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=1",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
    ],
  },
}
