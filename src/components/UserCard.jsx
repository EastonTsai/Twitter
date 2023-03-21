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

  return(
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
            <h3 className={styles.name}>{name}</h3>
            <h4 className={styles.account}>@{account}</h4>
          </div>
          <div className={styles.quantity}>
            <div>
              <div><TweetsIcon /></div>
              <h3>{tweets}</h3>
            </div>
            <div>
              <div><LikesIcon /></div>
              <h3>{likes}</h3>
            </div>
          </div>
          <div className={styles.follow}>
            <div>
              <h4>{followings} 個 <span>跟隨中</span></h4>
            </div>
            <div>
              <h4>{followers} 位<span>跟隨者</span></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserCard ;