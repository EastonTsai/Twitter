import styles from "styles/components/postBox.module.css"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { Btn } from "components/Common"

export const PostBox = ({ value, onChange, onClick, isDisable, avatar }) => {
  return (
    <div className={styles.postContainer}>
      <h4>首頁</h4>
      <div className={styles.post}>
        {!avatar ? <Default /> : <img src={avatar} alt="大頭貼" />}
        <form className={styles.postForm}>
          <textarea
            className={styles.postText}
            placeholder="有什麼新鮮事？"
            value={value}
            onChange={onChange}
          ></textarea>
        </form>
        <Btn
          className="btnRoundColor"
          text="推文"
          onClick={onClick}
          isDisable={isDisable}
        />
      </div>
    </div>
  )
}
