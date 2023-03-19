import { Menu } from "components/Menu"
import { RecommendBoard } from "components/RecommendBoard"

export default function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <header className="col-3">
          <Menu />
        </header>
        <main className="col-6"></main>
        <footer className="col-3">
          <RecommendBoard />
        </footer>
      </div>
    </div>
  )
}
