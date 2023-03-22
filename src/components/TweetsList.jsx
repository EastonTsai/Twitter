import { TweetItem } from "components/TweetItem"


export const dummyData = {
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
        tweetAuthorId: 2,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=2",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 3,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 3,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=3",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 4,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 4,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=4",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 5,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 5,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=5",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 6,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 6,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=6",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
      {
        id: 7,
        description:
          "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
        tweetAuthorId: 7,
        tweetAuthorName: "user_name",
        tweetAuthorAccount: "user_account",
        tweetAuthorAvatar: "https://picsum.photos/300/300?text=7",
        createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
        updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
        likeCounts: 10,
        replyCounts: 30,
      },
    ],
  },
}

export const TweetsList = () => {
  return (
    <div className="listContainer}">
      {dummyData.data.tweets.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
