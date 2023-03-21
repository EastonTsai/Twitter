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
      <div className={`p-sm ${styles.warningText}`}>
        <p className={styles.warningMessage}>{warningMessage}</p>
        <p className={styles.wordCount}>{wordCount}</p>
      </div>
    </div>
  )
}

// btn
export const Btn = ({ className, text }) => {
  return <button className={styles[className]}>{text}</button>
}

const TabContainer = ({ children, onClick }) => {
  return (
    <div className={styles.tabContainer} onClick={onClick}>
      <ul>{children}</ul>
    </div>
  )
}

const TabItem = ({ className, tabName }) => {
  return <li className={styles[className]}>{tabName}</li>
}

// tab : 推文、回覆、喜歡的內容
export const TweetsTab = ({ onClick, currentTab }) => {
  const tabList = [
    { tabName: "推文", tabId: 0 },
    { tabName: "回覆", tabId: 1 },
    { tabName: "喜歡的內容", tabId: 2 },
  ]
  return (
    <TabContainer onClick={onClick}>
      {tabList.map((tab) => {
        if (tab.tabId === currentTab) {
          return (
            <TabItem key={tab.tabId} tabName={tab.tabName} className="active" />
          )
        } else {
          return <TabItem key={tab.tabId} tabName={tab.tabName} />
        }
      })}
    </TabContainer>
  )
}

// tab : 追隨者、這在追隨
export const FollowTab = () => {
  const tabList = [
    { tabName: "追隨者", tabId: 0 },
    { tabName: "這在追隨", tabId: 1 },
  ]
  return (
    <TabContainer>
      <TabItem tabName="追隨者" />
      <TabItem tabName="這在追隨" />
    </TabContainer>
  )
}
