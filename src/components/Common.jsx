import styles from "styles/components/common.module.css"
import dayjs from "dayjs"
import "dayjs/locale/zh-tw"
import relativeTime from "dayjs/plugin/relativeTime"
import { postLike, postUnLike } from "api/twitter"
import { ReactComponent as Like } from "files/icon/like-sm.svg"
import { ReactComponent as Liked } from "files/icon/liked.svg"
import { useState, useEffect } from "react"

// InputBox : 錯誤時className = 'error'
export const InputBox = ({
  type,
  label,
  value,
  name,
  className,
  placeHolder,
  warningMessage,
  wordCount,
  onChange,
}) => {
  return (
    <div className={styles.inputBox}>
      <label>
        <div className={styles.label}>{label}</div>
        <input
          className={styles.inputStyle}
          type={type ? type : "text"}
          placeholder={placeHolder}
          defaultValue={value}
          name={name}
          onChange={onChange}
        ></input>

        <span className={`${styles.line} ${styles[className]}`}></span>
        <div className={`p-sm ${styles.warningText}`}>
          <p className={styles.warningMessage}>
            {warningMessage && warningMessage}
          </p>
          <p className={styles.wordCount}>
            {wordCount && `${value.length}/${wordCount}`}
          </p>
        </div>
      </label>
    </div>
  )
}
export const InputBox2 = ({
  type,
  label,
  value,
  name,
  handleChange,
  className,
  placeHolder,
  wordCount,
  state,
}) => {
  const [warningState, setWarningState] = useState(null)
  //如果傳進來的 state 符合下面四個項目 , 就會顯示警告
  //每次被渲染出來後都會判斷 state 要如何顯示---
  useEffect(() => {
    const currentState = {
      tooMatch: "字數太多",
      blank: "內容不能空白！",
      repeated: " 已重覆註冊！",
      different: "密碼輸入不相符！",
      accountError: "帳號不存在",
      passwordError: "密碼錯誤",
    }
    const handleState = () => {
      switch (state) {
        case currentState.tooMuch:
          return setWarningState("字數超過上限囉！")
        case currentState.blank:
          return setWarningState("內容不能空白！")
        case currentState.different:
          return setWarningState("密碼不相符！")
        case `account ${currentState.repeated}`:
          return setWarningState("account 已重覆註冊！")
        case `email ${currentState.repeated}`:
          return setWarningState("email 已重覆註冊！")
        case null:
          return setWarningState(null)
        default:
          return null
      }
    }
    handleState()
  })

  return (
    <div className={styles.inputBox}>
      <label>
        <div className={styles.label}>{label}</div>
        <input
          className={styles.inputStyle}
          type={type ? type : "text"}
          placeholder={placeHolder}
          defaultValue={value}
          name={name}
          maxLength={wordCount}
          onChange={(e) => {
            handleChange(e)
          }}
        ></input>
        {state ? (
          <span
            className={
              state ? `${styles.line} ${styles["error"]}` : `${styles.line}`
            }
          ></span>
        ) : (
          <span
            className={
              className ? `${styles.line} ${styles["error"]}` : `${styles.line}`
            }
          ></span>
        )}
        <div className={`p-sm ${styles.warningText}`}>
          <p className={styles.warningMessage}>{warningState}</p>
          <p className={styles.wordCount}>
            {wordCount && `${value.length}/${wordCount}`}
          </p>
        </div>
      </label>
    </div>
  )
}

// btn
export const Btn = ({ className, text, onClick, dataId, isDisable }) => {
  return (
    <button
      className={styles[className]}
      onClick={onClick}
      data-id={dataId}
      disabled={isDisable ? isDisable : false}
    >
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
export const TweetsTab = ({ onClick, currentTab, name }) => {
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

// 對貼文按讚/取消按讚
export const handleLikeClick = async (payload) => {
  const tweetId = payload.id
  const isLiked = payload.isLiked
  console.log(tweetId)
  console.log(isLiked)
  try {
    if (isLiked) {
      await postUnLike(Number(tweetId))
    } else {
      await postLike(Number(tweetId))
    }
  } catch (error) {
    console.error(error.response.data)
  }
}
