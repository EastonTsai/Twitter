import styles from "styles/components/common.module.css"
import dayjs from "dayjs"
import "dayjs/locale/zh-tw"
import relativeTime from "dayjs/plugin/relativeTime"

// InputBox : 錯誤時className = 'error'
export const InputBox = ({
  label,
  name,
  className,
  type,
  placeHolder,
  value,
  warningMessage,
  wordCount,
  handleChange,
}) => {
  return (
    <div className={styles.inputBox}>
      <div className={styles.label}>{label}</div>
      <input
        className={styles.inputStyle}
        type={type}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={(e)=>{handleChange(e)}}
      ></input>
      <span className={`${styles.line} ${styles[className]}`}></span>
      <div className={`p-sm ${styles.warningText}`}>
        <p className={styles.warningMessage}>{warningMessage}</p>
        <p className={styles.wordCount}>{wordCount}</p>
      </div>
    </div>
  )
}

// btn
export const Btn = ({ className, text, onclick }) => {
  return (
    <button className={styles[className]} onClick={onclick}>
      {text}
    </button>
  )
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
export const FollowTab = ({ onClick, currentTab }) => {
  const tabList = [
    { tabName: "追隨者", tabId: 0 },
    { tabName: "正在追隨", tabId: 1 },
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

let updateLocale = require("dayjs/plugin/updateLocale")
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.locale("zh-tw")
dayjs.updateLocale("zh-tw", {
  relativeTime: {
    future: "in %s",
    past: "%s ",
    s: "幾秒前",
    m: "1 分鐘",
    mm: "%d 分鐘",
    h: "1 小時",
    hh: "%d 小時",
    d: "1 天",
    dd: "%d 天",
    M: "1 個月",
    MM: "%d 個月",
    y: "1 年",
    yy: "%d 年",
  },
})

// 時間轉換成 上午H:MM YYYY年MM月DD日
export const transformDate = (originDate) => {
  return dayjs(originDate).format("A h:mm ． YYYY年MM月DD日")
}

// 時間轉換成相對時間 ex：幾小時前
export const transformRelativeTime = (originDate) => {
  return dayjs(originDate).fromNow()
}
