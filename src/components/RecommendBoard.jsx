import styles from "styles/components/recommendList.module.css"
import { Btn } from "components/Common"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { useEffect, useState } from "react"
import { getTopUsers, followUser, unFollowUser } from "api/twitterAPI"
import { useNavigate } from "react-router-dom"

const Recommend = ({
  avatar,
  name,
  account,
  isFollowed,
  id,
  onUserClick,
  onFollowBtnClick,
}) => {
  // 取得登入者的id
  const loginId = localStorage.getItem("id")

  return (
    <div className={styles.recommendContainer}>
      <div
        className={styles.linkContainer}
        onClick={() => {
          onUserClick?.({ id })
        }}
      >
        <div className={styles.recommendImg}>
          {!avatar ? <Default /> : <img src={avatar} alt="avatar" />}
        </div>
        <div className={`${styles.recommendBox} ${styles.recommendInfo}`}>
          <div className={`p-bold ${styles.recommendName}`}>{name}</div>
          <div className={`p-md ${styles.recommendAccount}`}>@{account}</div>
        </div>
      </div>
      <div className={styles.recommendBtn}>
        {id === Number(loginId) ? (
          ""
        ) : (
          <Btn
            className={isFollowed ? "btnRoundColor" : "btnRound"}
            text={isFollowed ? "正在追隨" : "跟隨"}
            onClick={(e) =>
              onFollowBtnClick?.({
                userId: e.target.dataset.id,
                isFollowed: isFollowed,
              })
            }
            dataId={id}
          />
        )}
      </div>
    </div>
  )
}

export const RecommendBoard = () => {
  const [topUsers, setTopUsers] = useState([])
  const navigate = useNavigate()
  const [followChange, setFollowChange] = useState()

  // 點擊user頭像、姓名、帳號連至user profile頁
  const handleUserClick = ({ id }) => {
    navigate("/profile", { state: { data: { id } } })
  }

  // 點擊追蹤或正在追蹤按鈕
  const handleFollowBtnClick = async ({ userId, isFollowed }) => {
    try {
      if (isFollowed) {
        const res = await unFollowUser(Number(userId))
        setFollowChange(res)
      } else {
        const res = await followUser(Number(userId))
        setFollowChange(res)
      }
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
  }, [followChange])

  return (
    <div className={styles.recommendBoard}>
      <div className={styles.recommendTitle}>
        <h4>推薦跟隨</h4>
      </div>
      <div className={styles.recommendList}>
        {topUsers.map((user) => (
          <Recommend
            key={user.id}
            {...user}
            onUserClick={handleUserClick}
            onFollowBtnClick={handleFollowBtnClick}
          />
        ))}
      </div>
    </div>
  )
}
