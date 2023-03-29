import "bootstrap/dist/css/bootstrap-grid.min.css"
import "App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from "pages/AdminPage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import TestPage from "pages/TestPage"
import HomePage from "pages/HomePage"
import TweetsPage from "pages/TweetsPage"
import TweetPage from "pages/TweetPage"
import ProfilePage from "pages/ProfilePage"
import SettingPage from "pages/SettingPage"
import AdminControllerPage from "pages/AdminControllerPage"
import AdminTweetListPage from "pages/AdminTweetListPage"
import AdminUserListPage from "pages/AdminUserListPage"
import FollowsPage from "pages/FollowsPage"
import { useState } from "react"
import { NewTweetContext } from "contexts/NewTweetContext"
import { AuthProvider } from "contexts/AuthContext"

const basename = process.env.PUBLIC_URL

function App() {
  const [newPost, setNewPost] = useState()
  return (
    <div>
      <NewTweetContext.Provider value={{ newPost, setNewPost }}>
        <BrowserRouter basename={basename}>
          <AuthProvider>
            <Routes>
              <Route path="admin" element={<AdminPage />} />
              <Route path="controller" element={<AdminControllerPage />}>
                <Route path="tweetList" element={<AdminTweetListPage />}></Route>
                <Route path="userList" element={<AdminUserListPage />}></Route>
              </Route>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="/" element={<HomePage />}>
                <Route path="tweets" element={<TweetsPage />}></Route>
                <Route path="tweet" element={<TweetPage />}></Route>
                <Route path="profile" element={<ProfilePage />}></Route>
                <Route path="follows" element={<FollowsPage />}></Route>
                <Route path="setting" element={<SettingPage />}></Route>
              </Route>
              <Route path="setting" element={<SettingPage />}></Route>
              <Route path="test" element={<TestPage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </NewTweetContext.Provider>
    </div>
  )
}

export default App
