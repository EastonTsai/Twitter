import styles from "styles/components/common.module.css"

// InputBox : 錯誤時className = 'error'
export const InputBox = ({
  label,
  className,
  type,
  placeHolder,
  value,
  warningMessage,
  wordCount,
}) => {
  return (
    <div className={styles.inputBox}>
      <div className={styles.label}>{label}</div>
      <input
        className={styles.inputStyle}
        type={type}
        placeholder={placeHolder}
        value={value}
      />
      <span className={`${styles.line} ${styles[className]}`}></span>
      <div className={styles.warningText}>
        <p className={styles.warningMessage}>{warningMessage}</p>
        <p className={styles.wordCount}>{wordCount}</p>
      </div>
    </div>
  )
}

// btn
export const Btn = ({ className, text, id }) => {
  return (
    <button id={id} className={styles[className]}>
      {text}
    </button>
  )
}

const TabContainer = ({ children }) => {
  return (
    <div className={styles.tabContainer}>
      <ul>{children}</ul>
    </div>
  )
}

const TabItem = ({ className, link, tabName }) => {
  return (
    <li className={className}>
      {/* <Link to={`/${link}`}>{tabName}</Link> */}
      {tabName}
    </li>
  )
}

// tab : 推文、回覆、喜歡的內容
export const TweetsTab = () => {
  return (
    <TabContainer>
      <TabItem tabName="推文" />
      <TabItem tabName="回覆" />
      <TabItem tabName="喜歡的內容" />
    </TabContainer>
  )
}

// tab : 追隨者、這在追隨
export const FollowTab = () => {
  return (
    <TabContainer>
      <TabItem tabName="追隨者" />
      <TabItem tabName="這在追隨" />
    </TabContainer>
  )
}
