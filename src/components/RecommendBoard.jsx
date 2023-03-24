import styles from "styles/components/recommendList.module.css"
import { Btn } from "components/Common"

const dummyData = {
  data: [
    {
      id: 4,
      name: "root",
      account: "root",
      avatar:
        "https://loremflickr.com/160/160/selfie/?random=78.51126970598948",
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: false,
    },
    {
      id: 14,
      name: "Eunice Crona",
      account: "user1",
      avatar:
        "https://loremflickr.com/160/160/selfie/?random=65.80046270383389",
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: false,
    },
    {
      id: 24,
      name: "Mona Moore",
      account: "user2",
      avatar:
        "https://loremflickr.com/160/160/selfie/?random=0.8005985362664614",
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: false,
    },
    {
      id: 34,
      name: "Angelo Bartell",
      account: "user3",
      avatar:
        "https://loremflickr.com/160/160/selfie/?random=10.773372429600702",
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: false,
    },
    {
      id: 44,
      name: "Anna Stehr",
      account: "user4",
      avatar:
        "https://loremflickr.com/160/160/selfie/?random=55.82166423546666",
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: false,
    },
    {
      id: 54,
      name: "Monique Lubowitz",
      account: "user5",
      avatar:
        "https://loremflickr.com/160/160/selfie/?random=77.45681196564993",
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: false,
    },
    {
      id: 64,
      name: "change",
      account: "change",
      avatar: null,
      Followers: [],
      Followings: [],
      followerCount: 0,
      isFollowed: false,
      isCurrentUser: true,
    },
  ],
}

const Recommend = ({ avatar, name, account, isFollowed }) => {
  return (
    <div className={styles.recommendContainer}>
      <div className={styles.recommendImg}>
        <img src={avatar} alt="" />
      </div>
      <div className={`${styles.recommendBox} ${styles.recommendInfo}`}>
        <div className={`p-bold ${styles.recommendName}`}>{name}</div>
        <div className={`p-md ${styles.recommendAccount}`}>@{account}</div>
      </div>
      <div className={styles.recommendBtn}>
        <Btn
          className={isFollowed ? "btnRoundColor" : "btnRound"}
          text="正在追隨"
        />
      </div>
    </div>
  )
}

// 有資料後用map進來
export const RecommendBoard = () => {
  return (
    <div className={styles.recommendBoard}>
      <div className={styles.recommendTitle}>
        <h4>推薦跟隨</h4>
      </div>
      <div className={styles.recommendList}>
        {dummyData.data.map((user) => (
          <Recommend key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}
