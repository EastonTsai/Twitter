import { PostBox } from "components/PostBox"
import { TweetsList } from "components/TweetsList"
import { RecommendBoard } from "components/RecommendBoard"
import styles from "styles/pages/tweetsPage.module.css"
import { useState, useEffect, useContext } from "react"
import { addTweet } from "api/CRUD"
import { getUserProfile } from "api/twitter"
import { NewTweetContext } from "contexts/NewTweetContext"

export default function TweetsPage() {
  const [inputValue, setInputValue] = useState("")
  const [userAvatar, setUserAvatar] = useState()
  const { setNewPost } = useContext(NewTweetContext)

  useEffect(() => {
    const loginId = localStorage.getItem("id")
    const getProfile = async () => {
      const profile = await getUserProfile(Number(loginId))
      setUserAvatar(profile.avatar)
    }
    getProfile()
  }, [])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  //這裡是點擊 postBox 裡的 '推文' 去新增推文
  const handleAddTweet = async () => {
    if (inputValue.length < 1 || inputValue.trim("") === "") {
      alert("內容不可空白")
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
    setInputValue("")
    setNewPost(data)
  }

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className="tweetsPage">
          <PostBox
            value={inputValue}
            onChange={handleChange}
            onClick={handleAddTweet}
            avatar={userAvatar}
          />
          <TweetsList />
        </div>
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
