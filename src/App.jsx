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
import AdminControllPage from "pages/AdminControllPage"
import AdminTweetListPage from "pages/AdminTweetListPage"
import AdminUserListPage from "pages/AdminUserListPage"
import FollowsPage from "pages/FollowsPage"
import { useState } from "react"

const basename = process.env.PUBLIC_URL

function App() {
  const [ allTweets, setAllTweets ] = useState([])
  //一開始抓的和後來新增的全站推文 , 都會從這裡通過----
  const handleAllTweets = (data) => {
    if(Array.isArray(data)){
      setAllTweets(data)
      return
    }
    setAllTweets([data, ...allTweets])
  }
  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="admin" element={<AdminPage />} />
          <Route path="controller" element={<AdminControllPage />}>
            <Route path="tweetList" element={<AdminTweetListPage />}></Route>
            <Route path="userList" element={<AdminUserListPage />}></Route>
          </Route>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<HomePage handleAllTweets={handleAllTweets}/>}>
            <Route path="tweets" element={<TweetsPage allTweets={allTweets} handleAllTweets={handleAllTweets} />}></Route>
            <Route path="tweet" element={<TweetPage />}></Route>
            <Route path="profile" element={<ProfilePage />}></Route>
            <Route path="follows" element={<FollowsPage />}></Route>
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
