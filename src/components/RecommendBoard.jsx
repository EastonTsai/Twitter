import styles from "styles/components/recommendList.module.css"
import { Btn } from "components/Common"

const dummyData = {
  data: {
    users: [
      {
        userId: 1,
        userName: "name1",
        userAccount: "account1",
        userAvatar: "https://picsum.photos/300/300?text=1",
        isFollowed: true,
      },
      {
        userId: 2,
        userName: "name2",
        userAccount: "account2",
        userAvatar: "https://picsum.photos/300/300?text=2",
        isFollowed: false,
      },
      {
        userId: 3,
        userName: "name3",
        userAccount: "account3",
        userAvatar: "https://picsum.photos/300/300?text=3",
        isFollowed: false,
      },
      {
        userId: 4,
        userName: "name4",
        userAccount: "account4",
        userAvatar: "https://picsum.photos/300/300?text=4",
        isFollowed: true,
      },
      {
        userId: 5,
        userName: "name5",
        userAccount: "account5",
        userAvatar: "https://picsum.photos/300/300?text=5",
        isFollowed: false,
      },
      {
        userId: 6,
        userName: "name6",
        userAccount: "account6",
        userAvatar: "https://picsum.photos/300/300?text=6",
        isFollowed: true,
      },
      {
        userId: 7,
        userName: "name7",
        userAccount: "account7",
        userAvatar: "https://picsum.photos/300/300?text=7",
        isFollowed: false,
      },
      {
        userId: 8,
        userName: "name8",
        userAccount: "account8",
        userAvatar: "https://picsum.photos/300/300?text=8",
        isFollowed: true,
      },
      {
        userId: 9,
        userName: "name9",
        userAccount: "account9",
        userAvatar: "https://picsum.photos/300/300?text=9",
        isFollowed: false,
      },
      {
        userId: 10,
        userName: "name10",
        userAccount: "account10",
        userAvatar: "https://picsum.photos/300/300?text=10",
        isFollowed: true,
      },
    ],
  },
}

const Recommend = ({ userAvatar, userName, userAccount, isFollowed }) => {
  return (
    <div className={styles.recommendContainer}>
      <div className={styles.recommendImg}>
        <img src={userAvatar} alt="" />
      </div>
      <div className={`${styles.recommendBox} ${styles.recommendInfo}`}>
        <div className={`p-bold ${styles.recommendName}`}>{userName}</div>
        <div className={`p-md ${styles.recommendAccount}`}>@{userAccount}</div>
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
        {dummyData.data.users.map((user) => (
          <Recommend key={user.userId} {...user} />
        ))}
      </div>
    </div>
  )
}
