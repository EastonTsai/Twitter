import styles from "styles/components/listItem.module.css"
import { ReactComponent as UserIcon } from "files/icon/logo.svg"
import { Btn } from "components/Common"
// import { ReactComponent as IsFollowIcon } from 'files/icon/'

//這是 '一篇' 文章的樣式
export default function FollowListItem({
  avatar,
  name,
  account,
  text,
  isFollow,
}) {
  /*按 XX do something... */
  const handleClick = () => {}

  return (
    <li className={styles.wrap}>
      <div className={styles.userAvatar}>
        {/*預設沒傳頭像的顯示 */}
        {/*我在 vscode 上看 <img> 下有波浪文 , 不知什麼問題 ? */}
        {avatar ? <img src={avatar} /> : <UserIcon />}
      </div>
      <div className={styles.tweetContent}>
        <div className={styles.topWrap}>
          <h3 className={styles.name}>
            {name}
            <span className={styles.account}> {account} </span>
          </h3>
          <div className={styles.button} onClick={handleClick}>
            {isFollow ? (
              <Btn className={"btnRoundColor"} text={"正在跟隨"} />
            ) : (
              <Btn className={"btnRound"} text={"跟隨"} />
            )}
          </div>
        </div>
        <p className={styles.text}> {text} </p>
      </div>
    </li>
  )
}
