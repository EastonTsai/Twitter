import styles from "styles/components/recommendList.module.css"
import { Btn } from "components/Common"

const Recommend = ({ img, name, account }) => {
  return (
    <div className={styles.recommendContainer}>
      <div className={styles.recommendImg}>
        <img src={img} alt="" />
      </div>
      <div className={`${styles.recommendBox} ${styles.recommendInfo}`}>
        <div className={styles.recommendName}>{name}</div>
        <div className={styles.recommendAccount}>@{account}</div>
      </div>
      <div className={styles.recommendBtn}>
        <Btn className="btnRoundColor" text="正在追隨" />
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
        <Recommend
          img="https://picsum.photos/300/300?text=1"
          name="Pizza Hut"
          account="pizzahut"
        />
        <Recommend
          img="https://picsum.photos/300/300?text=2"
          name="Nike"
          account="nike"
        />
        <Recommend
          img="https://picsum.photos/300/300?text=3"
          name="Adidas"
          account="adidas"
        />
      </div>
    </div>
  )
}
