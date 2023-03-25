import { RecommendBoard } from "components/RecommendBoard"
import { Profile } from "components/Profile"
import styles from "styles/pages/profilePage.module.css"
import { Link } from "react-router-dom"
import { ReactComponent as Back } from "files/icon/back.svg"
import { TweetsTab } from "components/Common"
import UserTweetsList from "components/UserTweetsList"
import UserReplyList from "components/UserReplyList"
import UserLikeList from "components/UserLikeList"
import { useState, useEffect } from "react"
import { getUserProfile } from "api/twitter"

export default function ProfilePage() {
  const content = [<UserTweetsList />, <UserReplyList />, <UserLikeList />]
  const [tabIndex, setTabIndex] = useState(0)
  const currenPage = content[tabIndex]
  const [profile, setProfile] = useState({})

  function handleClick(event) {
    const tabName = event.target.textContent
    if (tabName === "推文") {
      setTabIndex(0)
    } else if (tabName === "回覆") {
      setTabIndex(1)
    } else if (tabName === "喜歡的內容") {
      setTabIndex(2)
    }
  }

  useEffect(() => {
    const getUserProfileAsync = async () => {
      try {
        const userId = localStorage.getItem("id")
        const userProfile = await getUserProfile(Number(userId))
        setProfile(userProfile)
      } catch (error) {
        console.error(error)
      }
    }
    getUserProfileAsync()
  }, [])

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className={styles.linkContainer}>
          <Link to="/tweets" className={styles.backLink}>
            <Back />
          </Link>
          <div className={styles.textBox}>
            <h5>{profile.name}</h5>
            <div className={styles.tweet}>25推文</div>
          </div>
        </div>
        <Profile {...profile} />
        <TweetsTab onClick={handleClick} currentTab={tabIndex} />
        {currenPage}
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
