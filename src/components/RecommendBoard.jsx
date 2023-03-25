import styles from "styles/components/recommendList.module.css"
import { Btn } from "components/Common"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { useEffect, useState } from "react"
import { getTopUsers, followUser, unFollowUser } from "api/twitter"

const Recommend = ({ avatar, name, account, isFollowed, id, onClick }) => {
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
          text={isFollowed ? "正在追隨" : "跟隨"}
          onClick={(e) =>
            onClick?.({ userId: e.target.dataset.id, isFollowed: isFollowed })
          }
          dataId={id}
        />
      </div>
    </div>
  )
}

export const RecommendBoard = () => {
  const [topUsers, setTopUsers] = useState([])

  const handleClick = async ({ userId, isFollowed }) => {
    try {
      if (isFollowed) {
        await unFollowUser(Number(userId))
      } else {
        await followUser(Number(userId))
      }
      setTopUsers((prev) => {
        return prev.map((prev) => {
          if (prev.id === Number(userId)) {
            return {
              ...prev,
              isFollowed: !prev.isFollowed,
            }
          }
          return prev
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

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
        {topUsers.map((user) => (
          <Recommend key={user.id} {...user} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}
