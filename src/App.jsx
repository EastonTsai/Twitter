import "bootstrap/dist/css/bootstrap-grid.min.css"
import "App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from "pages/AdminPage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import TestPage from "pages/TestPage"
import HomePage from "pages/HomePage"
import TweetsPage from "pages/TweetsPage"
import ProfilePage from "pages/ProfilePage"
import SettingPage from "pages/SettingPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<AdminPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />}>
            <Route path="tweets" element={<TweetsPage />}></Route>
            <Route path="profile" element={<ProfilePage />}></Route>
            <Route path="setting" element={<SettingPage />}></Route>
          </Route>
          <Route path="setting" element={<SettingPage />}></Route>
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
