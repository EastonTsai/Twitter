# Twitter
這是一個復刻簡易版的Twiiter專案，可以推文、留言、按讚等的社交平台。
## 以下是我們的網站入口
https://eastontsai.github.io/Twitter

# 總覽：
- [網站功能](#網站功能)
- [安裝](#安裝)
- [開發技術](#開發技術)
- [開發人員](#開發人員)

## 網站功能：
#### 註冊：
首先請到註冊頁面創建一個專屬於你的身份( Account 及 Email 必須是獨一無二的 )
#### 登入：
請使用你成功註冊的帳號密碼登入網站
#### 編輯個人資料：
你可以在 '個人資料' 頁面中的 '編輯個人資料' 設定你的個人封面, 頭像, 修改個人匿稱及自我介紹
#### 個人資料：
你可以從 '個人資料'，查看使用者所有推文、留言、喜歡的內容
#### 設定個人帳戶：
你可以在 '設定' 頁面再次設定自己的帳號, 姓名, Email 及密碼 ( Account 及 Email 必須是獨一無二的 )
#### 瀏覽推文：
你可以看到所有使用者的最新推文 ( 推文順序由最新推文開始往下排列 )
#### 新增堆文：
你可以發表任何你想說的話
#### 回覆推文： 
你可以在他人的推文下留言
#### 按 Like：
你可以對任何推文按 Like 表達對此推文的喜歡
#### 追蹤他人：
你可以追蹤關注你有興趣的其他使用者
#### 查看追蹤：
你可以在 '個人資料' 頁面中的 '跟隨者' 中查看追蹤你的其它使用者們
#### 瀏覽他人頁面：
你可以透過點擊他人頭像，進入該使用這 '個人資料' 頁

## 安裝:
1. 請先確認已安裝 node.js 及 npm
2. 將專案下載到本地
3. 透過終端機進入該資料夾，請接著輸入：
   ```sh
   npm install
   ```
   下載成功後，將於資料夾看到新增的資料夾node_modules
4. 接著於終端機輸入：
   ```sh
   npm start
   ```
5. 若成功運行，可至瀏覽器輸入網址如下： 
http://localhost:3000/Twitter/login    

## 開發技術:
#### 本專案採前後端分離
前端 - 使用 React 前端框架打造網站畫面及使用者互動
後端 - 使用 以 Node.js 搭配 Express 與 MySQL，採用 RESTful API 風格建置，提供 API 串接

## 開發人員:
#### 前端: Becky | Easton
#### 後端: Doranne | Ellen 

