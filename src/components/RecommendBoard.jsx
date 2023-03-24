import styles from "styles/components/recommendList.module.css"
import { Btn } from "components/Common"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { useEffect, useState } from "react"
import { getTopUsers } from "api/twitter"

const Recommend = ({ avatar, name, account, isFollowed }) => {
  const handleClick = () => {
    console.log(Recommend.key)
  }

  return (
    <div className={styles.recommendContainer}>
      <div className={styles.recommendImg}>
        {!avatar ? <Default /> : <img src={avatar} alt="avatar" />}
      </div>
      <div className={`${styles.recommendBox} ${styles.recommendInfo}`}>
        <div className={`p-bold ${styles.recommendName}`}>{name}</div>
        <div className={`p-md ${styles.recommendAccount}`}>@{account}</div>
      </div>
      <div className={styles.recommendBtn}>
        <Btn
          className={isFollowed ? "btnRoundColor" : "btnRound"}
          text="正在追隨"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export const RecommendBoard = () => {
  const [users, setTopUsers] = useState([])

  useEffect(() => {
    const getTopUsersAsync = async () => {
      try {
        const topUsers = await getTopUsers()
        setTopUsers(topUsers.map((user) => ({ ...user })))
      } catch (error) {
        console.error(error)
      }
    }
    getTopUsersAsync()
  }, [])

  return (
    <div className={styles.recommendBoard}>
      <div className={styles.recommendTitle}>
        <h4>推薦跟隨</h4>
      </div>
      <div className={styles.recommendList}>
        {users.map((user) => (
          <Recommend key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}
