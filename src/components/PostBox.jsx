import styles from "styles/components/postBox.module.css"
import { ReactComponent as Avatar } from "files/icon/defaultAvatar.svg"
import { Btn } from "components/Common"

export const PostBox = () => {
  return (
    <div className={styles.postContainer}>
      <h4>首頁</h4>
      <div className={styles.post}>
        <Avatar />
        <form className={styles.postForm}>
          <textarea
            className={styles.postText}
            placeholder="有什麼新鮮事？"
          ></textarea>
        </form>
        <Btn className="btnRoundColor" text="推文" />
      </div>
    </div>
  )
}
