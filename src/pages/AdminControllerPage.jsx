import styles from 'styles/components/adminControllPage.module.css'
import { AdminMenu } from "components/AdminMenu"
import { Outlet } from "react-router-dom"
import { useEffect, useContext } from "react"
import AuthContext from 'contexts/AuthContext'

// 這裡是進入後端的首頁 , 等於是前台 path='/' 的地方 , 所以畫面上只看到左側 menu 區
export default function AdminControllerPage() {
  const context = useContext(AuthContext)
  //判斷是否為已登入的狀態
  // useEffect(()=>{
  //   (()=>{
  //     context.checkTokenWithAdminSecondStageInAdmin()
  //   })()
  // })

  return (
    <div className={`container ${styles.controller}`}>
      <div className="row">
        {/* 左側 menu 區 */}
        <header className="col-3">
          <AdminMenu />
        </header>
        {/* 右側 清單區 */}
        <main className="col-9">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
