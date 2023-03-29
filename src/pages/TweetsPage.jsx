import { PostBox } from "components/PostBox"
import { TweetsList } from "components/TweetsList"
import { RecommendBoard } from "components/RecommendBoard"
import styles from "styles/pages/tweetsPage.module.css"
import { useState, useEffect, useContext } from "react"
import { addTweet, getAllTweets } from "api/CRUD"
import { getUserProfile } from "api/twitter"
import AuthContext from "contexts/AuthContext"

export default function TweetsPage({ allTweets, handleAllTweets }) {
  const [inputValue, setInputValue] = useState("")
  const [isDisable, setIsDisable] = useState(true)
  const [userAvatar, setUserAvatar] = useState()
  const context = useContext(AuthContext)
  //判斷是否為已登入的狀態
  // useEffect(()=>{
  //   (()=>{
  //     context.checkTokenWithSecondStage()
  //   })()
  // })
  useEffect(() => {
    //進來先取得全站所有推文
    const getTweets = async () => {
      const tweets = await getAllTweets()
      handleAllTweets(tweets)
    }
    getTweets()
  }, [])

  useEffect(() => {
    const loginId = localStorage.getItem("id")
    const getProfile = async () => {
      const profile = await getUserProfile(Number(loginId))
      setUserAvatar(profile.avatar)
    }
    getProfile()
  }, [])

  const handleChange = (e) => {
    const targetValue = e.target.value
    setInputValue(targetValue)
    if (targetValue.trim() === 0) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
  }

  //這裡是點擊 postBox 裡的 '推文' 去新增推文
  const handleAddTweet = async () => {
    if (inputValue.length < 1 || inputValue.trim("") === "") {
      return
    }
    //送出
    const data = await addTweet(inputValue)
    if (!data) {
      alert("Sorry！伺服器故障囉~")
      setInputValue("")
      return
    }
    if (data === "error" || !data) {
      //告訴使用者字數超過了
      return
    }
    handleAllTweets(data)
    setInputValue("")
  }

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className="tweetsPage">
          <PostBox
            value={inputValue}
            onChange={handleChange}
            onClick={handleAddTweet}
            isDisable={isDisable}
            avatar={userAvatar}
          />
          <TweetsList allTweets={allTweets} />
        </div>
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
