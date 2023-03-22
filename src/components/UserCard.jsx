import styles from "styles/components/userCard.module.css"
import { ReactComponent as TweetsIcon } from "files/icon/Vector.svg"
import { ReactComponent as LikesIcon } from "files/icon/like.svg"

//因為 '卡片的樣式' 可能以後還可以用在別的地方 , 所以命名 '卡片' 而不是 '後端卡片'
// 這是 '一張' card 的樣子 , 請用 props 傳入卡片上顯示的資料
export const UserCard = ({
  cover,
  avatar,
  name,
  account,
  tweets,
  likes,
  followers,
  followings,
}) => {
  return (
    <div className="">
      <div className={styles.container}>
        <div className={styles.pic}>
          <div className={styles.cover}>
            <img src={cover}></img>
          </div>
          <div className={styles.avatar}>
            <div>
              <img src={avatar}></img>
            </div>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.user}>
            <div className={`p-bold ${styles.name}`}>{name}</div>
            <div className={`p-md ${styles.account}`}>@{account}</div>
          </div>
          <div className={styles.quantity}>
            <div>
              <div>
                <TweetsIcon />
              </div>
              <p>{tweets}</p>
            </div>
            <div>
              <div>
                <LikesIcon />
              </div>
              <p>{likes}</p>
            </div>
          </div>
          <div className={styles.follow}>
            <div>
              <div className="p-md">
                {followings} 個<span>跟隨中</span>
              </div>
            </div>
            <div>
              <div className="p-md">
                {followers} 位<span>跟隨者</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserCard
