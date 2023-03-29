import { Menu } from "components/Menu"
import AuthContext from "contexts/AuthContext"
import { useEffect, useContext } from "react"
import { Outlet } from "react-router-dom"

export default function HomePage({ handleAllTweets }) {
  const context = useContext(AuthContext)
  //判斷是否為已登入的狀態
  // useEffect(()=>{
  //   (()=>{
  //     context.checkTokenWithSecondStage()
  //   })()
  // })
  return (
    <div className="container">
      <div className="row">
        <header className="col-3">
          <Menu handleAllTweets={handleAllTweets} />
        </header>
        <Outlet />
      </div>
    </div>
  )
}
