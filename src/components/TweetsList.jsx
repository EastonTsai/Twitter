import { TweetItem } from "components/TweetItem"

export const dummyData = {
  data: [
    {
      id: 4,
      description: "itaque ut occaecati",
      createdAt: "2023-03-21T13:14:00.000Z",
      updatedAt: "2023-03-21T13:14:00.000Z",
      likedCounts: 0,
      replyCounts: 3,
      User: {
        id: 14,
        name: "Eunice Crona",
        account: "user1",
        avatar:
          "https://loremflickr.com/160/160/selfie/?random=65.80046270383389",
      },
    },
    {
      id: 54,
      description:
        "Beatae praesentium illo non provident.\nEaque non odit voluptates fugiat quos.\nOdit quam debitis veniam id.",
      createdAt: "2023-03-21T13:14:00.000Z",
      updatedAt: "2023-03-21T13:14:00.000Z",
      likedCounts: 0,
      replyCounts: 3,
      User: {
        id: 14,
        name: "Eunice Crona",
        account: "user1",
        avatar:
          "https://loremflickr.com/160/160/selfie/?random=65.80046270383389",
      },
    },
    {
      id: 104,
      description:
        "Repudiandae consequatur est ad qui. Consequatur omnis voluptatibus voluptates accusantium. Eos ex consequuntur voluptate adipisci. Ex et ten",
      createdAt: "2023-03-21T13:14:00.000Z",
      updatedAt: "2023-03-21T13:14:00.000Z",
      likedCounts: 0,
      replyCounts: 3,
      User: {
        id: 14,
        name: "Eunice Crona",
        account: "user1",
        avatar:
          "https://loremflickr.com/160/160/selfie/?random=65.80046270383389",
      },
    },
    {
      id: 154,
      description: "et dolores aspernatur",
      createdAt: "2023-03-21T13:14:00.000Z",
      updatedAt: "2023-03-21T13:14:00.000Z",
      likedCounts: 0,
      replyCounts: 3,
      User: {
        id: 14,
        name: "Eunice Crona",
        account: "user1",
        avatar:
          "https://loremflickr.com/160/160/selfie/?random=65.80046270383389",
      },
    },
  ],
}

export const TweetsList = () => {
  return (
    <div className="listContainer}">
      {dummyData.data.map((tweet) => (
        <TweetItem key={tweet.id} {...tweet} />
      ))}
    </div>
  )
}
