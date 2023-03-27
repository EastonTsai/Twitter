import { Menu } from "components/Menu"
import { Outlet } from "react-router-dom"

export default function HomePage({handleAllTweets}) {
  return (
    <div className="container">
      <div className="row">
        <header className="col-3">
          <Menu handleAllTweets={handleAllTweets}/>
        </header>
        <Outlet />
      </div>
    </div>
  )
}
