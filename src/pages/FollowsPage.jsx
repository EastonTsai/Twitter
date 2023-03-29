import styles from "styles/pages/profilePage.module.css"
import { RecommendBoard } from "components/RecommendBoard"
import { ReactComponent as Back } from "files/icon/back.svg"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { FollowTab } from "components/Common"
import FollowListItem from "components/FollowListItem"
import { getUserFollowersApi, getUserFollowingsApi } from "api/CRUD"
import AuthContext from "contexts/AuthContext"
const user = {name: 'Joe 寫史的資料' }//考處之後在全站記錄的使用者個資

export default function FollowsPage() {
  const location = useLocation()
  //下兩行是為了要得到指到這的 <Link> 裡的 search 裡的 index 的 '值'
  const searchParams = new URLSearchParams(location.search)
  const index = searchParams.get("index")
  //記錄 tab 要顯示誰
  const [tabIndex, setTabIndex] = useState(Number(index))
  //記錄當前列要顯示 '追隨者' 或 '正在追隨' 清單
  const [currenPage, setCurrenPage] = useState(null) 
  const context = useContext(AuthContext)
  //判斷是否為已登入的狀態
  // useEffect(()=>{
  //   (()=>{
  //     context.checkTokenWithSecondStage()
  //   })()
  // })
  //進到畫面後 , 依照 tabIndex 渲染相對的资料
  useEffect(()=>{
    const infoItPage = ()=>{
      const id = localStorage.getItem('id')
      if(tabIndex === 0){ //取追隨者
        getFollowers(id)
        return
      }
      getFollowings(id)
    }
    infoItPage()
  },[])
  //在畫面中 , 點擊 Tab 會渲染出相對清單的流程-------
  //若沒有回傳的資料也會渲染空白頁
  function handleClickTab(event) {
    const tabName = event.target.textContent
    const id = localStorage.getItem('id')
    if (tabName === "追隨者") {
      getFollowers(id)
      return
    }
    getFollowings(id)
  }
  //怎麼取資料的方法----------
  const getFollowers = async (id)=>{
      const data = await getUserFollowersApi(id)
      setTabIndex(0)
      if(!data || data.length < 1){
        //給 null 是因為如果點了另一個是空也要渲染, 不是會留下原本的 
        setCurrenPage(null)
        console.log('沒有任何 " 跟隨者 "')
      }
      setCurrenPage(() => { return getItems(data)})

  }
  const getFollowings = async (id)=>{
      const data = await getUserFollowingsApi(id)
      setTabIndex(1)
      if(!data || data.length < 1){
        setCurrenPage(null)
        console.log('沒有 " 跟隨 " 任何人')
      }
      setCurrenPage(() => { return getItems(data)})
    }
  //取得資料後 , 渲染出清單的流程 ------------------- 
  function getItems(data) {
    let listItems = data.map( user => {
      return(
        <FollowListItem
          key={user.followerId}
          name={user.name}
          avatar={user.avatar}
          text={user.introduction}
          isFollow= {user.isFollowed}
        />
      )
    })
    return listItems;
  }//--------------------------------------------
  return(
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className={styles.linkContainer}>
          <Link to="/ProfilePage" className={styles.backLink}>
            <Back />
          </Link>
          <div className={styles.textBox}>
            <h5>{user.name}</h5>
            <div className={styles.tweet}>25推文</div>
          </div>
        </div>
        <FollowTab 
          onClick={handleClickTab} 
          currentTab={tabIndex} 
        />
        <div className={`container-fluid ${styles.listContainer}`}>
          {currenPage}
        </div>
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
