import { Menu } from "components/Menu"
import { RecommendBoard } from "components/RecommendBoard"
import { Outlet } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <header className="col-3">
          <Menu />
        </header>
        <main className="col-6">
          <Outlet />
        </main>
        <footer className="col-3">
          <RecommendBoard />
        </footer>
      </div>
    </div>
  )
}
