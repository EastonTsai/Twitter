import styles from "styles/pages/profilePage.module.css"
import { RecommendBoard } from "components/RecommendBoard"
import { ReactComponent as Back } from "files/icon/back.svg"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { FollowTab } from "components/Common"
import FollowListItem from "components/FollowListItem"
import {
  getUserFollowersApi,
  getUserFollowingsApi,
  followUser,
  unFollowUser,
} from "api/twitterAPI"

export default function FollowsPage() {
  const location = useLocation()
  //下兩行是為了要得到指到這的 <Link> 裡的 search 裡的 index 的 '值'
  const searchParams = new URLSearchParams(location.search)
  const index = searchParams.get("index")
  //記錄 tab 要顯示誰
  const [tabIndex, setTabIndex] = useState(Number(index))
  //記錄當前列要顯示 '追隨者' 或 '正在追隨' 清單
  const [currentPage, setCurrentPage] = useState(null)
  // id : profile人的id、name、tweetCounts
  const currentId = useLocation().state.data.currentId
  const currentName = useLocation().state.data.name
  const tweetCounts = useLocation().state.data.tweetCounts
  const [followChange, setFollowChange] = useState()

  //進到畫面後 , 依照 tabIndex 渲染相對的资料
  useEffect(() => {
    const infoItPage = () => {
      if (tabIndex === 0) {
        //取追隨者
        getFollowers(Number(currentId))
      } else {
        getFollowings(Number(currentId))
      }
    }
    infoItPage()
  }, [tabIndex, followChange])
  //在畫面中 , 點擊 Tab 會渲染出相對清單的流程-------
  //若沒有回傳的資料也會渲染空白頁
  function handleClickTab(event) {
    const tabName = event.target.textContent
    if (tabName === "追隨者") {
      setTabIndex(0)
    } else {
      setTabIndex(1)
    }
  }
  //怎麼取資料的方法----------
  const getFollowers = async (id) => {
    const data = await getUserFollowersApi(id)
    console.log(data)
    if (!data || data.length < 1) {
      //給 null 是因為如果點了另一個是空也要渲染, 不是會留下原本的
      setCurrentPage(null)
      console.log('沒有任何 " 跟隨者 "')
    }
    setCurrentPage(
      data.map((user) => {
        return (
          <FollowListItem
            key={user.followerId}
            id={user.followerId}
            name={user.name}
            avatar={user.avatar}
            text={user.introduction}
            isFollowed={user.isFollowed}
            onFollowBtnClick={handleFollowBtnClick}
          />
        )
      })
    )
  }
  const getFollowings = async (id) => {
    const data = await getUserFollowingsApi(id)
    if (!data || data.length < 1) {
      setCurrentPage(null)
      console.log('沒有 " 跟隨 " 任何人')
    }
    setCurrentPage(
      data.map((user) => {
        return (
          <FollowListItem
            key={user.followingId}
            id={user.followingId}
            name={user.name}
            avatar={user.avatar}
            text={user.introduction}
            isFollowed={user.isFollowed}
            onFollowBtnClick={handleFollowBtnClick}
          />
        )
      })
    )
  }
  // 點擊追隨/正在追隨按鈕
  const handleFollowBtnClick = async ({ userId, isFollowed }) => {
    try {
      if (isFollowed) {
        const res = await unFollowUser(Number(userId))
        setFollowChange(res)
      } else {
        const res = await followUser(Number(userId))
        setFollowChange(res)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className={styles.linkContainer}>
          <Link
            to="/profile"
            state={{ data: { id: currentId } }}
            className={styles.backLink}
          >
            <Back />
          </Link>
          <div className={styles.textBox}>
            <h5>{currentName}</h5>
            <div className={styles.tweet}>{tweetCounts} 推文</div>
          </div>
        </div>
        <FollowTab onClick={handleClickTab} currentTab={tabIndex} />
        <div className={`container-fluid ${styles.listContainer}`}>
          {currentPage}
        </div>
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
