import styles from "styles/components/followListItem.module.css"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { Btn } from "components/Common"
import { useNavigate } from "react-router-dom"

//追隨者/正在追隨清單的一個item樣式
export default function FollowListItem({
  id,
  avatar,
  name,
  text,
  isFollowed,
  onFollowBtnClick,
}) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/profile", { state: { data: { id } } })
  }

  return (
    <li className={styles.wrap}>
      <div className={styles.userAvatar} onClick={handleClick}>
        {avatar ? <img alt="avatar" src={avatar} /> : <Default />}
      </div>
      <div className={styles.tweetContent}>
        <div className={styles.topWrap}>
          <h3 className={styles.name} onClick={handleClick}>
            {name}
          </h3>
          <div className={styles.button}>
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
          </div>
        </div>
        <p className={styles.text}> {text} </p>
      </div>
    </li>
  )
}
