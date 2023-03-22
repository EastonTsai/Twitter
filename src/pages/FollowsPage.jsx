import { dummy, dummy2 } from "dummy/dummy"
import styles from "styles/pages/profilePage.module.css"
import { RecommendBoard } from "components/RecommendBoard"
import { ReactComponent as Back } from "files/icon/back.svg"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { FollowTab } from "components/Common"
// import FollowListItem from "components/FollowListItem"
import { FollowerList } from "components/FollowerList"
import { FollowingList } from "components/FollowingList"

export default function FollowsPage() {
  const clickTabIndex = useLocation().state.tab
  //下兩行是為了要得到指到這的 <Link> 裡的 search 裡的 index 的 '值'
  // const searchParams = new URLSearchParams(location.search)
  // const index = searchParams.get('index')
  //記錄 tab 要顯示誰
  // const [tabIndex, setTabIndex] = useState(0)
  //記錄當前列要顯示 '追隨者' 或 '正在追隨' 清單
  // const [currenPage, setCurrenPage] = useState(null)

  //----------------------
  //進到畫面很 , 如何顯示和 index 相對應的清單 ..待解決
  //----------------------
  // 修改後
  const content = [<FollowerList />, <FollowingList />]
  const [tabIndex, setTabIndex] = useState(clickTabIndex)
  const currenPage = content[tabIndex]

  const res = dummy.data //串假資料
  function handleClick(event) {
    const tabName = event.target.textContent
    if (tabName === "追隨者") {
      console.log("追隨者")
      setTabIndex(0)
      // setCurrenPage(() => {
      //   return getItems(dummy.data)
      // })
    } else if (tabName === "正在追隨") {
      console.log("正在追隨")
      setTabIndex(1)
      // setCurrenPage(() => {
      //   return getItems(dummy2.data)
      // })
    }
  }
  //取得 items 參數是 資料 = 陣列
  // function getItems(data) {
  //   let listItems = data.map((dm) => {
  //     return (
  //       <FollowListItem
  //         key={dm.id}
  //         name={dm.name}
  //         text={dm.description}
  //         isFollow={dm.isFollowed}
  //         avatar={dm.avator}
  //       />
  //     )
  //   })
  //   return listItems
  // }
  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className={styles.linkContainer}>
          <Link to="/tweets" className={styles.backLink}>
            <Back />
          </Link>
          <div className={styles.textBox}>
            <h5>{res.name}</h5>
            <div className={styles.tweet}>25推文</div>
          </div>
        </div>
        <FollowTab onClick={handleClick} currentTab={tabIndex} />
        <div className={`container-fulid ${styles.listContainer}`}>
          {currenPage}
        </div>
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
